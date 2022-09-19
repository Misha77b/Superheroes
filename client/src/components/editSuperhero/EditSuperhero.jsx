import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from "react-router-dom";
import useStylesEditSuperhero from './useStylesEditSuperhero';

import { getSuperheroe, updateSuperheroe } from '../../API/superheroes/superheroes.thunks';

import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';

const EditSuperhero = () => {
    useStylesEditSuperhero();
    const dispatch = useDispatch();
    
    const { pageId } = useParams();

    const superheroe = useSelector((state) => state.superheroesReducer.superheroe); 

    useEffect(() => {
        dispatch(getSuperheroe(pageId));
    }, [pageId]); 

    const [nickname, setNickname] = useState(superheroe.nickname);
    const [real_name, setReal_name] = useState(superheroe.real_name);
    const [origin_description, setOrigin_description] = useState(superheroe.origin_description);
    const [superpowers, setSuperpowers] = useState(superheroe.superpowers);
    const [catch_phrase, setCatch_phrase] = useState(superheroe.catch_phrase);
    const [images, setImages] = useState(superheroe.images);

    const handleEditImage = (e) => {
        e.preventDefault();
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


        dispatch(updateSuperheroe(pageId, editSuperheroeData));

        setNickname("");
        setReal_name("");
        setOrigin_description("");
        setSuperpowers("");
        setCatch_phrase("");
        setImages("");
    }

  return (
    <div className='edit-container'>
        <h1>Edit Superhero</h1>
        
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
                    // value={images}
                    onChange={handleEditImage}
                    name="images"
                    type="file" 
                    className="form-control image-form" 
                    id="images" 
                    placeholder="Upload images" 
                />
                {/* <img src={`/assets/${superheroe.images}`} alt="hero img"width={"100px"} />
                <Input 
                    value={images}
                    // onChange={handleEditImage}
                    name="images"
                    type="hidden" 
                    className="form-control image-form" 
                    id="images" 
                    placeholder="Upload images" 
                /> */}
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