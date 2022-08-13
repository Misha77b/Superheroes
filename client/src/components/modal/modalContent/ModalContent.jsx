import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useFormik } from 'formik';
import * as yup from 'yup';

import Button from '@mui/material/Button';
import TextField from '@mui/material//TextField';
import PropTypes from 'prop-types';

import { createSuperheroeRequest } from '../../../API/superheroes/superheroes.actions';

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

  const formik = useFormik({
    initialValues: {
      nickname: '',
      real_name: '',
      origin_description: '',
      superpowers: '',
      catch_phrase:  '',
      Images:  '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const createSuperheroe = {
        nickname: values.nickname,
        real_name: values.real_name,
        origin_description: values.origin_description,
        superpowers: values.superpowers,
        catch_phrase: values.catch_phrase,
        Images: values.Images,
      }
      dispatch(createSuperheroeRequest(createSuperheroe));
      handleClose();
    },
  });

  return (
    <form
      style={style}
      onSubmit={formik.handleSubmit}  
    >
      <TextField  
        fullWidth
        id="nickname"
        name="nickname"
        label="Nickname"
        value={formik.values.nickname}
        onChange={formik.handleChange}
        error={formik.touched.nickname && Boolean(formik.errors.nickname)}
        helperText={formik.touched.nickname && formik.errors.nickname}
      />

      <TextField  
        fullWidth
        id="real_name"
        name="real_name"
        label="Real name"
        value={formik.values.real_name}
        onChange={formik.handleChange}
        error={formik.touched.real_name && Boolean(formik.errors.real_name)}
        helperText={formik.touched.real_name && formik.errors.real_name}
      />

      <TextField  
        fullWidth
        id="origin_description"
        name="origin_description"
        label="Origin description"
        value={formik.values.origin_description}
        onChange={formik.handleChange}
        error={formik.touched.origin_description && Boolean(formik.errors.origin_description)}
        helperText={formik.touched.origin_description && formik.errors.origin_description}
      />
      
      <TextField  
        fullWidth
        id="superpowers"
        name="superpowers"
        label="Superpowers"
        value={formik.values.superpowers}
        onChange={formik.handleChange}
        error={formik.touched.superpowers && Boolean(formik.errors.superpowers)}
        helperText={formik.touched.superpowers && formik.errors.superpowers}
      />

      <TextField  
        fullWidth
        id="catch_phrase"
        name="catch_phrase"
        label="Catch phrase"
        value={formik.values.catch_phrase}
        onChange={formik.handleChange}
        error={formik.touched.catch_phrase && Boolean(formik.errors.catch_phrase)}
        helperText={formik.touched.catch_phrase && formik.errors.catch_phrase}
      />

      <TextField  
        fullWidth
        id="Images"
        name="Images"
        type="file"
        value={formik.values.Images}
        onChange={formik.handleChange}
        error={formik.touched.Images && Boolean(formik.errors.Images)}
        helperText={formik.touched.Images && formik.errors.Images}
      />

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