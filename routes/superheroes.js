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
    // params id serach is OK
    const id = req.params.id;
    console.log(id);

    console.log(Superhero.find((hero) => hero.name));
    // const getSuperheroe = Superhero.findOne((hero) => {
    //     return hero._id === id
    // })
    res.send(id);
    
    // Superhero.findOne({
    //     itemNo: req.params._id
    // })
    // .then(hero => {
        // if (!hero) {
        //     res.status(400).json({
        //     message: `Product with itemNo ${req.params.itemNo} is not found`
        // });
        // } else {
            // res.json(hero);
        // }
    // })
    // .catch(err =>
    //     res.status(400).json({
    //         message: `Error happened on server: "${err}" `
    //     })
    // );
})

router.patch('/:id', async (req, res) => {
    
})

router.delete('/:id', async (req, res) => {

});
  

module.exports = router;