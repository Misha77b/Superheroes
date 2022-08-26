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

const validationSchema = yup.object({
  nickname: yup.string()
    .nullable()
    .required('Nickname is required'),
  real_name: yup.string()
    .nullable()
    .required('Real name is required'),
  origin_description: yup.string()
    .nullable()
    .required('Is required'),
  superpowers: yup.string()
    .nullable()
    .required('Is required'),
  catch_phrase: yup.string()
    .nullable()
    .required('Is required')
});

const ModalContent = ({ handleClose }) => {
  const dispatch = useDispatch();
  UseStylesModalContent();

  const [nickname, setNickname] = useState("");
  const [real_name, setReal_name] = useState("");
  const [origin_description, setOrigin_description] = useState("");
  const [superpowers, setSuperpowers] = useState("");
  const [catch_phrase, setCatch_phrase] = useState("");
  const [images, setImages] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const createSuperheroeData = {
      nickname,
      real_name,
      origin_description,
      superpowers,
      catch_phrase,
      images,
    }
    dispatch(createSuperheroe(createSuperheroeData));
    handleClose();
  }

  return (
    <form 
      style={style}
      onSubmit={handleSubmit}  
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
          value={images}
          onChange={(e) => {setImages(e.target.value)}}
          type="file" 
          className="form-control" 
          id="images" 
          placeholder="Upload images" 
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