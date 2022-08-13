import { makeStyles } from '@mui/styles';

const UseStylesHeader = makeStyles({
    '@global': {
        '.header': {
            width: '100%',
            height: '80px',
            background: 'rgb(228,221,244)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center', 
            position: 'relative'   
        },
        '.header-logo-title' : {
            margin: '10px 15px',                   
            fontFamily: 'Roboto sans-serif',
            fontSize: '30px',
            fontWeight: '700',
            color: 'rgb(45,45,45)',
            cursor: 'pointer',
        },
        '.header-btn': {
            position: 'absolute',
        }
    }
})

export default UseStylesHeader;