import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import useStylesEditSuperhero from './useStylesEditSuperhero';

import { updateSuperheroe } from '../../API/superheroes/superheroes.thunks';

import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import fileUploadReader from '../../helpers/fileUploadReader';
import DragAndDropFiles from '../dragAndDropFiles/DragAndDropFiles';

const EditSuperhero = ({ superheroe, pageId }) => {
    useStylesEditSuperhero();

    const dispatch = useDispatch();
    
    const [nickname, setNickname] = useState(superheroe.nickname);
    const [real_name, setReal_name] = useState(superheroe.real_name);
    const [origin_description, setOrigin_description] = useState(superheroe.origin_description);
    const [superpowers, setSuperpowers] = useState(superheroe.superpowers);
    const [catch_phrase, setCatch_phrase] = useState(superheroe.catch_phrase);
    const [images, setImages] = useState(superheroe.images);
    const [old_image, setOld_Image] = useState(superheroe.images);

    const handleEditImage = (e) => {
        // work better with choosing another image and reloading the page
        
        // e.preventDefault();
        setImages(e.target.files[0]);
        fileUploadReader(e);
    }

    const handleSubmit = (e) => {
        // e.preventDefault();

        const editSuperheroeData = new FormData();
        editSuperheroeData.append("nickname", nickname);
        editSuperheroeData.append("real_name", real_name);
        editSuperheroeData.append("origin_description", origin_description);
        editSuperheroeData.append("superpowers", superpowers);
        editSuperheroeData.append("catch_phrase", catch_phrase);
        editSuperheroeData.append("images", images);
        editSuperheroeData.append("images", old_image);

        dispatch(updateSuperheroe(pageId, editSuperheroeData));

        setNickname("");
        setReal_name("");
        setOrigin_description("");
        setSuperpowers("");
        setCatch_phrase("");
        setImages("");
        setOld_Image("");
    }

  return (
     <div className='edit-container'>
        <h1 className='edit-header'>Edit Superhero</h1>
        
        <form 
            className="form-wrapper"
            onSubmit={handleSubmit}  
            encType="multipart/form-data"
        >
            <div className="form-group">
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
                <Input 
                    value={origin_description}
                    onChange={(e) => {setOrigin_description(e.target.value)}}
                    type="article"
                    multiline={true}
                    className="form-control textarea" 
                    id="origin_description" 
                    placeholder="Origin description" 
                />
            </div>

            <div className="form-group">
                <Input 
                    value={superpowers}
                    onChange={(e) => {setSuperpowers(e.target.value)}}
                    type="article" 
                    multiline={true}
                    className="form-control textarea" 
                    id="superpowers" 
                    placeholder="Superpowers" 
                />
            </div>

            <div className="form-group">
                <Input 
                    value={catch_phrase}
                    onChange={(e) => {setCatch_phrase(e.target.value)}}
                    type="article" 
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
                
                <img name="images" id="uploadedImage" src={`/assets/${superheroe.images}`} alt="hero img"width={"100px"} />
                <Input value={old_image} name="old_image" type="hidden" />
            </div>

            <div sx={{gap: "20px"}}>
                <Button
                    className='view-btn'
                    type="submit"     
                    color='secondary' 
                    variant='contained'
                >
                    Save changes
                </Button>
                <Button
                    className='view-btn'
                    component={Link}
                    id={pageId}
                    to={`/view/${superheroe._id}`}
                    color='secondary' 
                    variant='contained'
                >
                    To details
                </Button>
            </div>
        </form>
    </div>
    
  )
}

export default EditSuperhero

EditSuperhero.propTypes = {
    superheroe: PropTypes.object,
    pageId: PropTypes.string
}