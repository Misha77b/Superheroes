const Router = require("express");
const multer = require("multer");
const uploads = require("../models/imageStorage");
const path = require ('path');

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
router.put('/view/:id', UpdateSuperhero);
router.delete('/:id', DeleteSuperhero);

module.exports = router;