const { type } = require('../databases/redis');
const asyncClient = require('../utils/redis_promisify')
const {decryptAccesToken} = require('./authJwt')


const TIMEOUT = 60 * 30; // 30 minutes

const keys = [];


module.exports = async (req, res, next) => {
  console.log(keys)
  
  
    try {
        if(req.method === "GET"){
          
          
          let key;
          
          if(!req.headers["authorization"] || req.url.includes("admin") || req.url === "/refresh_token") key = req.url
          else {
            const data = await decryptAccesToken(req.headers['authorization'])
            key = req.url + data.id
          }
    

            if (keys.includes(key)) {
                const value =  JSON.parse(await asyncClient.get(key));
                console.log('cached response')
                res.json(value);
            } 
            else {

                const originalJson = res.json.bind(res);

                res.json = async (data) => {
                    
                    const jsonData = JSON.stringify(data);

                    if(!jsonData || jsonData.match(/error|undefined/gi)) return originalJson(data)
                    if(data.refreshToken || data.accessToken) return originalJson(data)

                    await asyncClient.setex(key, TIMEOUT, jsonData);

                    keys.push(key);

                    console.log("modified json")

                    originalJson(data);
                          
                }

                next();
            }
        }else {
          
            const cachedKeys = keys.filter(key => {
              const count = (key.match(/.*[0-9]/g) || []).length;
            
              if(req.url.includes(key.split("?").shift().slice(count,-1))) return true
              if(req.url === "/signup" && key.includes("/admin/user")) return true
              
            })
            
            if(!cachedKeys.length) return next()
            
            console.log('Removing keys', cachedKeys);

            await asyncClient.del(cachedKeys);
            
            
            for(const key of cachedKeys) keys.splice(keys.indexOf(key), 1)
            cachedKeys.length = 0
            
           
            next();
        }

    } catch (error) {
        console.log(error.message)
        res.status(401).send(error.message)
    }
}



