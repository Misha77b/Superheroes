const Superhero = require('../models/superheroSchema');

exports.GetSuperheroes = async (req, res) => {
    const superheroes = await Superhero.find({});
    res.send(superheroes);
};

exports.PostSuperhero = async (req, res) => {
    console.log(req.file);
    const newSuperhero = { 
        nickname = req.body.nickname, 
        real_name = req.body.real_name, 
        origin_description = req.body.origin_description, 
        superpowers = req.body.superpowers, 
        catch_phrase = req.body.catch_phrase, 
        images = req.file.images
    } = req.body;
    // const newSuperhero  = req.body;
    const createdSuperhero = await Superhero.create(newSuperhero);
    createdSuperhero
        .save()
        .then((result) => res.send(result))
};

exports.GetSuperheroById = async (req, res) => {
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