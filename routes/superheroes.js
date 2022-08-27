const Router = require("express");
const multer = require("multer");
// const uploads = require("../models/imageStorage");

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
        callback(null, './client/public/assets/');
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
})

const uploads = multer({ storage: storage });

const router = new Router();

router.get('/', GetSuperheroes);
router.post('/', uploads.single('images'), PostSuperhero);
// router.post('/', PostSuperhero);
router.get('/view/:id', GetSuperheroById);
router.put('/view/:id', UpdateSuperhero);
router.delete('/:id', DeleteSuperhero);

module.exports = router;