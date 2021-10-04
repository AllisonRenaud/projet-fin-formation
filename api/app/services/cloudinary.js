const cloudinary = require('cloudinary');

cloudinary.config({ 
  cloud_name: 'dudxvl1m3', 
  api_key: '321759913749339', 
  api_secret: 'wu5YyKEkaSLWpufw7GvYf5pZNxs' 
});


module.exports = {
  upload: async (request, response, next) => {
    try {
      const {url} = await cloudinary.v2.uploader.upload(request.body.main_picture);
      request.body.main_picture = url

      
      const optionalPictures = Object.keys(request.body)
                                     .map(key => key.includes("galery_picture") ? key : null)
                                     .filter(key => key)
                                     .filter(key => Object.keys(key).length)
      if(!optionalPictures) return next()
      for(const picture of optionalPictures) {
        
        const {url} = await cloudinary.v2.uploader.upload(request.body[picture]);
        request.body[picture] = url
      }

      next()
      
    } catch (error) {
        response.status(500).end(error.message)
    }
  },

  deletePicture: async (request, response, next) => {
    try {
      // url.split("/").pop().split('.').shift()
      const result = await cloudinary.v2.uploader.destroy(request.body.public_id);
      response.json(result);
    } catch (error) {
      
    }
  }
}
