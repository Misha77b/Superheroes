const Router = require("express");
// const { appendFile } = require("fs-extra");
const Superhero = require('../models/superhero');
const router = new Router();

router.get('/', async (req, res) => {
    const superheroes = await Superhero.find({})
    res.send(superheroes);
})

router.post('/', async (req, res) => {
    const newSuperhero = req.body;
    console.log(newSuperhero);

    const response = await Superhero.create(newSuperhero)
    console.log(response);
    res.send("ok")

    // const { nickname, real_name, origin_description, superpowers, catch_phrase, Images } = req.body;
    // const superhero = new Superhero({ nickname, real_name, origin_description, superpowers, catch_phrase, Images })
    // superhero
    //     .save()
    //     .then((result) => res.send(result))
    //     .catch((error) => {
    //         console.log(error);
    //     })

})

module.exports = router;