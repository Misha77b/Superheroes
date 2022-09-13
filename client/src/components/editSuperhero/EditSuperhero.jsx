import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import useStylesEditSuperhero from './useStylesEditSuperhero';

import { getSuperheroe, updateSuperheroe } from '../../API/superheroes/superheroes.thunks';

import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import { Link } from "react-router-dom";


const EditSuperhero = () => {
    useStylesEditSuperhero();
    const dispatch = useDispatch();
    
    const { pageId } = useParams();

    const superheroe = useSelector((state) => state.superheroesReducer.superheroe); 

    useEffect(() => {
        dispatch(getSuperheroe(pageId))
    }, [pageId]); 

    const [nickname, setNickname] = useState(superheroe.nickname);
    const [real_name, setReal_name] = useState(superheroe.real_name);
    const [origin_description, setOrigin_description] = useState(superheroe.origin_description);
    const [superpowers, setSuperpowers] = useState(superheroe.superpowers);
    const [catch_phrase, setCatch_phrase] = useState(superheroe.catch_phrase);
    const [images, setImages] = useState(superheroe.images);

    const handleEditImage = (e) => {
        setImages(e.target.files[0]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const editSuperheroeData = new FormData();
        editSuperheroeData.append("nickname", nickname);
        editSuperheroeData.append("real_name", real_name);
        editSuperheroeData.append("origin_description", origin_description);
        editSuperheroeData.append("superpowers", superpowers);
        editSuperheroeData.append("catch_phrase", catch_phrase);
        editSuperheroeData.append("images", images);
        
        dispatch(updateSuperheroe(editSuperheroeData));

        setNickname("");
        setReal_name("");
        setOrigin_description("");
        setSuperpowers("");
        setCatch_phrase("");
        setImages("");
        handleClose();
    }

  return (
    <>
        {/* title  */}
        <h1>Edit Superhero</h1>
        
        <form 
            className="form-wrapper"
            onSubmit={handleSubmit}  
            encType="multipart/form-data"
        >
            <div className="form-group">
            {/* <label>Nickname</label> */}
            <Input 
                value={nickname}
                variant="outlined"
                onChange={(e) => {setNickname(e.target.value)}}
                type="text" 
                className="form-control" 
                id="nickname" 
                placeholder="Nickname" 
            />
            </div>

            <div className="form-group">
            {/* <label>Real name</label> */}
            <Input 
                value={real_name}
                onChange={(e) => {setReal_name(e.target.value)}}
                type="text" 
                className="form-control" 
                id="real_name" 
                placeholder="Real name" 
            />
            </div>

            <div className="form-group">
            {/* <label>Origin description</label> */}
            <Input 
                value={origin_description}
                onChange={(e) => {setOrigin_description(e.target.value)}}
                type="article"
                minRows={3}
                multiline={true}
                className="form-control textarea" 
                id="origin_description" 
                placeholder="Origin description" 
            />
            </div>

            <div className="form-group">
            {/* <label>Superpowers</label> */}
            <Input 
                value={superpowers}
                onChange={(e) => {setSuperpowers(e.target.value)}}
                type="article" 
                minRows={3}
                multiline={true}
                className="form-control textarea" 
                id="superpowers" 
                placeholder="Superpowers" 
            />
            </div>

            <div className="form-group">
            {/* <label>Catch phrase</label> */}
            <Input 
                value={catch_phrase}
                onChange={(e) => {setCatch_phrase(e.target.value)}}
                type="article" 
                minRows={3}
                multiline={true}
                className="form-control textarea" 
                id="catch_phrase" 
                placeholder="Catch phrase" 
            />
            </div>

            <div className="form-group">
            <InputLabel>Upload images</InputLabel>
            <Input 
                onChange={handleEditImage}
                name="images"
                type="file" 
                className="form-control image-form" 
                id="images" 
                placeholder="Upload images" 
            />
            </div>

            {/* <Button sx={{
                width: '220px', 
                margin: '0 auto',
            }}
            variant='contained'
            type="submit"             
            color='secondary' 
            >
            Create superheroe
            </Button> */}
            <Button
                className='view-btn'
                component={Link}
                type="submit"     
                id={superheroe._id}
                to={`/view/${superheroe._id}`}
                color='secondary' 
                variant='contained'
            >
                Save changes
            </Button>
        </form>
    </>
  )
}

export default EditSuperhero