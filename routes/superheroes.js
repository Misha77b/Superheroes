const Router = require("express");
const multer = require("multer");
const uploads = require("../models/imageStorage");

const {
    GetSuperheroes, 
    PostSuperhero,
    GetSuperheroById,
    UpdateSuperhero,
    DeleteSuperhero
} = require('../controllers/controllers');

const router = new Router();

router.get('/', GetSuperheroes);
router.post('/', uploads.single('images'), PostSuperhero);
router.get('/view/:id', GetSuperheroById);
router.put('/edit/:id', uploads.single('images'), UpdateSuperhero);
router.delete('/:id', DeleteSuperhero);
router.get('/favorites', );
router.post('/favorites', );

module.exports = router;