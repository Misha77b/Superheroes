import { makeStyles } from '@mui/styles';

const useStylesSuperheroDetails = makeStyles({
    '@global': {
        '.superheroDetails': {
            padding: '75px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr'
        },
        '.img-container': {
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
        }
    }
})

export default useStylesSuperheroDetails;