import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import UseStylesModalContent from './UseStylesModalContent';
import PropTypes from 'prop-types';

import * as yup from 'yup';

import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

import fileUploadReader from '../../../helpers/fileUploadReader';
import { createSuperheroe } from '../../../API/superheroes/superheroes.thunks';
import { createBtnStyle } from '../btnsStyle/createBtnStyle';

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
    fileUploadReader(e);
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
    
    dispatch(createSuperheroe(createSuperheroeData));

    setNickname("");
    setReal_name("");
    setOrigin_description("");
    setSuperpowers("");
    setCatch_phrase("");
    setImages("");
    handleClose();
  }

  return (
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
          minRows={3}
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
          minRows={3}
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
          minRows={3}
          multiline={true}
          className="form-control textarea" 
          id="catch_phrase" 
          placeholder="Catch phrase" 
        />
      </div>

      <div className="form-group">
        <InputLabel className='upload-image-label'>Upload images</InputLabel>
        <Input 
          onChange={handleUploadImage}
          name="images"
          type="file" 
          className="form-control image-form" 
          id="images" 
          placeholder="Upload images" 
        />
        <img src={''} id={'uploadedImage'} />
      </div>

      <Button 
        sx={createBtnStyle}
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