const Router = require("express");
const multer = require("multer");
const moment = require("moment");

const {
    GetSuperheroes, 
    PostSuperhero,
    GetSuperheroById,
    UpdateSuperhero,
    DeleteSuperhero
} = require('../controllers/controllers');


//  image upload
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './storage/');
    },
    filename: (req, file, callback) => {
        callback(null, file.fieldname);
    }
})

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const uploads = multer({ storage: storage });

const router = new Router();

router.get('/', GetSuperheroes);
router.post('/', uploads.single("images"), PostSuperhero);
// router.post('/', PostSuperhero);
router.get('/view/:id', GetSuperheroById);
router.put('/view/:id', UpdateSuperhero);
router.delete('/:id', DeleteSuperhero);

module.exports = router;