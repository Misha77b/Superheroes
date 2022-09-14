const Superhero = require('../models/superheroSchema');

exports.GetSuperheroes = async (req, res) => {
    const superheroes = await Superhero.find({});
    res.send(superheroes);
};

exports.PostSuperhero = async (req, res) => {
    try{
        console.log(req.file);
        console.log(req.body);
        const newSuperhero = await new Superhero ({ 
            nickname: req.body.nickname, 
            real_name: req.body.real_name, 
            origin_description: req.body.origin_description, 
            superpowers: req.body.superpowers, 
            catch_phrase: req.body.catch_phrase, 
            images: req.file.filename
        })
        newSuperhero
            .save()
            .then((result) => res.send(result))
    } catch (e) {
        res.status(500).json(e);
    }
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
        const updatedSuperhero = await Superhero.findByIdAndUpdate(id, { 
            nickname: req.body.nickname, 
            real_name: req.body.real_name, 
            origin_description: req.body.origin_description, 
            superpowers: req.body.superpowers, 
            catch_phrase: req.body.catch_phrase, 
            images: req.file.filename
        }, {new: true})
        if(!id){
            res.status(400).json({message: 'Id is not defined'});
        }
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