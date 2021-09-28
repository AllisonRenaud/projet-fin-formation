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
              if(key.includes(req.url)) return true 
              if(key.includes(req.url.split("?").shift())) return true 
              if(req.url === "/signup" && key.includes("/admin/user")) return true
              if(req.url === "/offers" && key.includes("/admin/offers")) return true
              if(req.url === "/bookings" && key.includes("/admin/bookings")) return true
              if(req.url === "/messages" && key.includes("/admin/messages")) return true
              if(req.url === "/comments" && key.includes("/admin/comments")) return true
              if(req.url === "/user" && key.includes("/admin/user")) return true
              if(req.url === "/admin/offers" && key.includes("/offers")) return true
            })
            
            if(!cachedKeys.length) return next()
            
            console.log('Removing keys', cachedKeys);

            await asyncClient.del(cachedKeys);
            
            for(const key of cachedKeys) keys.splice(keys.indexOf(key), 1)
           
            next();
        }

    } catch (error) {
        console.log(error.message)
        res.status(401).send(error.message)
    }
}



