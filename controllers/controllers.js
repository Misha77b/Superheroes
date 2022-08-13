const { serializeUser } = require('passport');
const Superhero = require('../models/superhero');

exports.GetSuperheroes = async (req, res) => {
    const superheroes = await Superhero.find({});
    res.send(superheroes);
};

exports.PostSuperhero = async (req, res) => {
    const newSuperhero = req.body;
    console.log(newSuperhero);

    const response = await Superhero.create(newSuperhero);
    console.log(response);
    res.send("ok");
};

exports.GetSuperheroById = async (req, res) => {
    // params id serach is OK
    try{
        const id = req.params.id;
        if(!id) {
            res.status(400).json({message: 'Id is not defined'});
        }
        const superhero = await Superhero.findById(id);
        return res.json(superhero);
    } catch(e) {
        res.status(500).json(e);
    }
};

exports.UpdateSuperhero = async (req, res) => {
    try{
        const id = req.params.id;
        const superhero = req.body;
        if(!id){
            res.status(400).json({message: 'Id is not defined'});
        }
        const updatedSuperhero = await Superhero.findByIdAndUpdate(id, superhero, {new: true});
        return res.json(updatedSuperhero);
    } catch(e) {
        res.status(500).json(e);
    }
};

exports.DeleteSuperhero = async (req, res) => {
    try{
        const id = req.params.id;
        if(!id){
            res.status(400).json({message: 'Id is not defined'});
        }
        const superhero = await Superhero.findByIdAndDelete(id);
        return res.json(superhero)
    } catch(e) {
        res.status(500).json(e);
    }
};