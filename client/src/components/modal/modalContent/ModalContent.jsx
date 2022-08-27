import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UseStylesModalContent from './UseStylesModalContent';
import PropTypes from 'prop-types';

import * as yup from 'yup';

import Button from '@mui/material/Button';

import { createSuperheroe } from '../../../API/superheroes/superheroes.thunks';
import { useState } from 'react';

const style={                
  display: 'flex', 
  flexDirection: 'column',
  gap: '10px',
}

const ModalContent = ({ handleClose }) => {
  const dispatch = useDispatch();
  UseStylesModalContent();

  const [nickname, setNickname] = useState("");
  const [real_name, setReal_name] = useState("");
  const [origin_description, setOrigin_description] = useState("");
  const [superpowers, setSuperpowers] = useState("");
  const [catch_phrase, setCatch_phrase] = useState("");
  const [images, setImages] = useState("");

  const handleUploadImage = (e) => {
    setImages(e.target.files[0]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const createSuperheroeData = new FormData();
    createSuperheroeData.append("nickname", nickname);
    createSuperheroeData.append("real_name", real_name);
    createSuperheroeData.append("origin_description", origin_description);
    createSuperheroeData.append("superpowers", superpowers);
    createSuperheroeData.append("catch_phrase", catch_phrase);
    createSuperheroeData.append("images", images);
    
    console.log(images);
    
    setNickname("");
    setReal_name("");
    setOrigin_description("");
    setSuperpowers("");
    setCatch_phrase("");
    setImages("");

    dispatch(createSuperheroe(createSuperheroeData));
    handleClose();
  }

  return (
    <form 
      style={style}
      onSubmit={handleSubmit}  
      encType="multipart/form-data"
    >
      <div className="form-group">
        <label>Nickname</label>
        <input 
          value={nickname}
          onChange={(e) => {setNickname(e.target.value)}}
          type="text" 
          className="form-control" 
          id="nickname" 
          placeholder="Nickname" 
        />
      </div>

      <div className="form-group">
        <label>Real name</label>
        <input 
          value={real_name}
          onChange={(e) => {setReal_name(e.target.value)}}
          type="text" 
          className="form-control" 
          id="real_name" 
          placeholder="Real name" 
        />
      </div>

      <div className="form-group">
        <label>Origin description</label>
        <textarea 
          value={origin_description}
          onChange={(e) => {setOrigin_description(e.target.value)}}
          type="article" 
          className="form-control" 
          id="origin_description" 
          placeholder="Origin description" 
        />
      </div>

      <div className="form-group">
        <label>Superpowers</label>
        <textarea 
          value={superpowers}
          onChange={(e) => {setSuperpowers(e.target.value)}}
          type="article" 
          className="form-control" 
          id="superpowers" 
          placeholder="Superpowers" 
        />
      </div>

      <div className="form-group">
        <label>Catch phrase</label>
        <textarea 
          value={catch_phrase}
          onChange={(e) => {setCatch_phrase(e.target.value)}}
          type="article" 
          className="form-control" 
          id="catch_phrase" 
          placeholder="Catch phrase" 
        />
      </div>

      <div className="form-group">
        <label>Upload images</label>
        <input 
          // value={images}
          onChange={handleUploadImage}
          type="file" 
          className="form-control" 
          id="images" 
          placeholder="Upload images" 
          filename="images"
        />
      </div>

      <Button sx={{
          width: '220px', 
          margin: '0 auto',
        }}
        variant='contained'
        type="submit"             
        color='secondary' 
      >
        Create superheroe
      </Button>
    </form>
  )
}

export default ModalContent

ModalContent.propTypes = {
  handleClose: PropTypes.func
}