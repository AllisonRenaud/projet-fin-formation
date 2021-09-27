const redis = require('redis');
const url = process.env.REDIS_URL

client = redis.createClient({url})

client.GET("ping", (err, data) => {
  if(err) console.log(err)
  console.log(data)
  if(data === "PONG") console.log('redis database connected')
})

client.on("error", (error) => {
    console.log(error)
});

module.exports = client
