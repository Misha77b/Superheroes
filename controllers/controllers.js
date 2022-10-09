const Superhero = require('../models/superheroSchema');
const fs = require('fs');

exports.GetSuperheroes = async (req, res) => {
    try{
        const superheroes = await Superhero.find({});
        res.send(superheroes);
    } catch (e) {
        res.status(500).json(e);
    }
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
        let new_img = "";
        if(req.file) {
            new_img = req.file.filename;
            try {
                fs.unlinkSync(`./client/public/assets/${req.body.images}`);
            } catch(err) {
                console.log(err);
            }
        }else {
            new_img = req.body.images
        }
        const updatedSuperhero = await Superhero.findByIdAndUpdate(id, { 
            nickname: req.body.nickname, 
            real_name: req.body.real_name, 
            origin_description: req.body.origin_description, 
            superpowers: req.body.superpowers, 
            catch_phrase: req.body.catch_phrase, 
            images: new_img
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
        const superhero = await Superhero.findByIdAndDelete(id, (err, res) => {
            if(res.images != '') {
                try{
                    fs.unlinkSync(`./client/public/assets/${req.file.filename}`);
                } catch(err){
                    console.log(err);
                }
            }
        });
        return res.json(superhero)
    } catch(e) {
        res.status(500).json(e);
    }
};