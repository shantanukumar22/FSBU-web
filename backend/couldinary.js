const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({
  cloud_name: "dpww7ybcd",
  api_key: "932789333944456",
  api_secret: "7SxpSYXwlF-1RibvDE5VN55pdJM",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "fsbu", 
    allowed_formats: ["jpg", "jpeg", "png"],
  },
});

const upload = multer({ storage });

module.exports = { cloudinary, upload };

