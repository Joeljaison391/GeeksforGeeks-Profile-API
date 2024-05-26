const cloudinary = require('cloudinary').v2;

const dotenv = require('dotenv');
dotenv.config();





cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadImage = async (buffer) => {
    console.log('CLOUDINARY_CLOUD_NAME', process.env.CLOUDINARY_CLOUD_NAME);
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream({ resource_type: 'image' }, (error, result) => {
      if (error) reject(error);
      else resolve(result.secure_url);
    }).end(buffer);
  });
};

module.exports = { uploadImage };
