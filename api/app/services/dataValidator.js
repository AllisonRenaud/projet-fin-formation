const schema = require("../schemas")

module.exports = async (req, res, next) => {

    try {
        console.log("validator activated")

        let urlSchemaMatch = req.url.split("/").find(element => element)
                
        if(urlSchemaMatch.includes("?")) urlSchemaMatch = urlSchemaMatch.split("?").shift()

        console.log(urlSchemaMatch)
        
        const dataLocationsList = ["body", "query"]

        const dataLocation = dataLocationsList.find(location => Object.keys(req[location]).length)
        if(!dataLocation) return next()
        

        req[dataLocation] = await validate(req[dataLocation], urlSchemaMatch, req.method)
        next()
        
    } catch (error) {
        res.status(400).json(error.message)
    }
    
}

const validate = (data, urlSchemaMatch, method) => {

    return new Promise((resolve, reject) => {
        if(schema[urlSchemaMatch]){
            
            const schemaName = Object.keys(schema[urlSchemaMatch]).find(name => {
                if(method === "PATCH" && name.match(/[uU]pdate|[sS]ave/g)) return true
                   
                if(method === "POST" && name.match(/[cC]reate|[aD]dd|[sS]ave/g)) return true

                if(method === 'GET' && name.match(/[gG]et|[fF]ilter/)) return true

                if(method === 'DELETE' && name.match(/[gG]et|[fF]ilter/)) return true

            })

            if(!schemaName) return reject({message:"no schema match"})
           
            const {error, value} = schema[urlSchemaMatch][schemaName].validate(data)
            
            if(error) return reject(error.details[0])
            else return resolve(value)

  
        }
        else if(schema.auth[urlSchemaMatch]){
            

            const {error, value} = schema.auth[urlSchemaMatch].validate(data)
            if(error) return reject(error.details[0])
            else return resolve(value)
            
        }
        else return reject({message: "no schema match"})
    })
   
}
