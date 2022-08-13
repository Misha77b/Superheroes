import { makeStyles } from '@mui/styles';

const UseStylesHeader = makeStyles({
    '@global': {
        '.header': {
            width: '100%',
            height: '80px',
            background: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center', 
            position: 'relative'   
        },
        '.header-logo-title' : {
            margin: '10px 15px',                   
            fontFamily: 'Roboto sans-serif',
            fontSize: '24px',
            fontWeight: '700',
            color: 'black',
            cursor: 'pointer',
        },
        '.header-btn': {
            position: 'absolute',
        }
    }
})

export default UseStylesHeader;