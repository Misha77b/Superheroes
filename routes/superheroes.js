const Router = require("express");
// const { appendFile } = require("fs-extra");
const Superhero = require('../models/superhero');
const router = new Router();

router.get('/', (req, res) => {
    res.send(req.body);
    res.send('hello, superheroes info');
})

router.post('/', (req, res) => {
    // const newSuperhero = req.body;
    const { nickname, real_name, origin_description, superpowers, catch_phrase, Images } = req.body;
    const superhero = new Superhero({ nickname, real_name, origin_description, superpowers, catch_phrase, Images })
    superhero
        .save()
        .then((result) => res.send(result))
        .catch((error) => {
            console.log(error);
        })

    res.send(superhero)
    // const { nickname, real_name, origin_description, superpowers, catch_phrase, Images } = req.body
    // const superhero = new Superhero ({ nickname, real_name, origin_description, superpowers, catch_phrase, Images })
    // superhero
    //     .save()
    //     .then((data) => res.send(data))
    //     .catch((error) => console.log(error))
})

module.exports = router;