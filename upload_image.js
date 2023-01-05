const cloudinary = require('cloudinary').v2;

// Configuration 
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY_CLOUD,
    api_secret: process.env.API_SECRET_CLOUD
});

const upload_image = async (req, res) => {

    const file = req.files?.image ? req.files.image : null


    if (file) {
        cloudinary.uploader.upload(file.tempFilePath, async (err, result) => {
            const image_url = await result.url


          return  res.json({url:image_url})



        })
    }



}


module.exports = { upload_image }