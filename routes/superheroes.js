const Router = require("express");
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
router.put('/:id', UpdateSuperhero);
router.delete('/:id', DeleteSuperhero);

module.exports = router;