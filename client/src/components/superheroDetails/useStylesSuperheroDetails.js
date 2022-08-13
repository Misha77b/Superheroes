import { makeStyles } from '@mui/styles';

const useStylesSuperheroDetails = makeStyles({
    '@global': {
        '.superheroDetails': {
            display: 'felx',
            flexDirection: 'row',
            justifyContent: 'center',
            position: 'relative',
        },
        '.img-container': {
            width: '40vw',
            height: 'fit-content',
            position: 'relative',
            top: '100px',
            left: '50px',
            border: '2px solid #9c9c9c',
            borderRadius: '20px'
        },
        '.superhero-image': {
            width: '450px',
            height: '450px',
            objectFit: 'contain',
            margin: '20px'
        },
        '.info-container': {
            width: '50vw',
            marginLeft: '40px',
        }
    }
})

export default useStylesSuperheroDetails;