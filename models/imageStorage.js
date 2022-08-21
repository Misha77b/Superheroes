const multer = require("multer");
const moment = require("moment");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images/')
    },
    filename: (req, file, cb) => {
        // const date = moment.format(`DDMMYYYY-HHmmss_SSS`);
        cb(null, file.originalname);
    }
});


const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

module.exports = uploads = multer({ storage: storage, fileFilter: fileFilter })