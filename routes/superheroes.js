const Router = require("express");
// const { appendFile } = require("fs-extra");
const Superhero = require('../models/superhero');
const {
    GetSuperheroes, 
    PostSuperhero,
    GetSuperheroById,
    UpdateSuperhero,
    DeleteSuperhero
} = require('../controllers/controllers')
const router = new Router();

router.get('/', GetSuperheroes);
router.post('/', PostSuperhero);
router.get('/:id', GetSuperheroById);
router.patch('/:id', UpdateSuperhero);
router.delete('/:id', DeleteSuperhero);

module.exports = router;