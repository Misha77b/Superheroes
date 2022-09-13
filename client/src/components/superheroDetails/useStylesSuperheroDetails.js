import { makeStyles } from '@mui/styles';

const useStylesSuperheroDetails = makeStyles({
    '@global': {
        '.superheroDetails': {
            padding: '75px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '100px'
        },
        '.img-container': {
            display: 'flex',
            justifyContent: 'center',
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
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '500px',            
            fontFamily: 'Lato sans-serif',
        },
        '.superheroe-nickname': {
            margin: '0',
            fontSize: '30px',
            fontWeight: '700',
        },
        '.superheroe-realName': {
            fontSize: '26px',
            fontWeight: '400',
        },
        '.superheroe-originalDescription': {
            fontSize: '20px',
            fontWeight: '400',
        },
        '.superheroe-superpowers': {
            fontSize: '20px',
            fontWeight: '400',
        },
        '.superheroe-catchPhrase': {
            fontSize: '20px',
            fontWeight: '400',
        },
        '.edit-btn': {
            width: '300px'
        }
    }
})

export default useStylesSuperheroDetails;