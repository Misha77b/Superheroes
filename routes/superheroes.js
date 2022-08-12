const Router = require("express");
// const { appendFile } = require("fs-extra");
const Superhero = require('../models/superhero');
const router = new Router();

router.get('/', async (req, res) => {
    const superheroes = await Superhero.find({});
    res.send(superheroes);
})

router.post('/', async (req, res) => {
    const newSuperhero = req.body;
    console.log(newSuperhero);

    const response = await Superhero.create(newSuperhero);
    console.log(response);
    res.send("ok");
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const getSuperheroe = Superhero.find((hero) => {
        console.log(hero.id === id);
        // return hero.id === id
    })
    res.send(getSuperheroe);
})

router.patch('/:id', async (req, res) => {
    
})

router.delete('/:id', async (req, res) => {

});
  

module.exports = router;