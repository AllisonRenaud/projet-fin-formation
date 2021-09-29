const {cloudinary} = require('cloudinary');

cloudinary.config({ 
  cloud_name: 'dudxvl1m3', 
  api_key: '321759913749339', 
  api_secret: 'wu5YyKEkaSLWpufw7GvYf5pZNxs' 
});

const uploadController = {

    upload: () => {
      const image = request.query.upload;
      cloudinary.v2.uploader.upload(
        `${image}`,
        {
          
        }, 
      function(error, result) {console.log(error, result); });
    }
}

module.exports = uploadController;
