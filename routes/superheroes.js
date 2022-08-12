const Router = require("express");
const { appendFile } = require("fs-extra");
const Superhero = require('../models/superhero');
const router = new Router();

const superheroes = [
    {
        nickname : "Superman",
        real_name : "Clark Kent",
        origin_description : "he was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Krypton's destruction...",
        superpowers : "solar energy absorption and healing factor, solar flare and heat vision, solar invulnerability, flight...",
        catch_phrase : "Look, up in the sky, it's a bird, it's a plane, it's Superman!",
        Images : [
            {
                url : "hello"
            }
        ]
    },
    {
        nickname : "Superman",
        real_name : "Clark Kent",
        origin_description : "he was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Krypton's destruction...",
        superpowers : "solar energy absorption and healing factor, solar flare and heat vision, solar invulnerability, flight...",
        catch_phrase : "Look, up in the sky, it's a bird, it's a plane, it's Superman!",
        Images : [
            {
                url : "hello"
            }
        ]
    }
]

router.get('/', (req, res) => {
    res.send(superheroes);
    res.send('hello, superheroes info');
})

router.post('/', (req, res) => {
    const newSuperhero = req.body;
    superheroes.push(newSuperhero);
    res.send("new superhero is added")
    // const { nickname, real_name, origin_description, superpowers, catch_phrase, Images } = req.body
    // const superhero = new Superhero ({ nickname, real_name, origin_description, superpowers, catch_phrase, Images })
    // superhero
    //     .save()
    //     .then((data) => res.send(data))
    //     .catch((error) => console.log(error))
})

module.exports = router;