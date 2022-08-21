const Superhero = require('../models/superhero');
const multer = require("multer");
const moment = require("moment");

//  image upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './images/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const uploads = multer({ storage: storage });

exports.GetSuperheroes = async (req, res) => {
    const superheroes = await Superhero.find({});
    res.send(superheroes);
};

exports.PostSuperhero = async (req, res) => {
    // const Images = req.file ? req.file.path : '';
    const newSuperhero = { 
        nickname, 
        real_name, 
        origin_description, 
        superpowers, 
        catch_phrase, 
        Images= req.file.Images
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