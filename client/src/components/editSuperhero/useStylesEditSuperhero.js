import { makeStyles } from '@mui/styles';

const useStylesEditSuperhero = makeStyles({
    '@global': {
        '.edit-container': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        },
        '.edit-header': {
            margin: '0 auto',
            fontFamily: 'Roboto sans-serif',
            fontSize: '34px',
            fontWeight: '400',
            color: '#F2F1F4',
        },
        '.form-wrapper': {
            // display: 'flex'
        }
    }
})

export default useStylesEditSuperhero;