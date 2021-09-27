const redis = require('redis');


const client = redis.createClient(process.env.REDIS_TLS_URL, {
  tls: {
      rejectUnauthorized: false
  }
})

client.GET("ping", (err, data) => {
  if(err) console.log(err)
  console.log('redis database connected')
})

client.on("error", (error) => {
    console.log(error)
});

module.exports = client
