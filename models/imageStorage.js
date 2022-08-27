const multer = require("multer");
const moment = require("moment");

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './client/public/assets/');
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
})


const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

module.exports = uploads = multer({ storage: storage, fileFilter: fileFilter })