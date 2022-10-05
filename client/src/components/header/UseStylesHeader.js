import { makeStyles } from '@mui/styles';

const UseStylesHeader = makeStyles({
    '@global': {
        '.header': {
            width: '100%',
            height: '80px',
            background: '#0b0d0e',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between', 
            
        },
        '.header-nav-icons': {
            margin: '10px 50px'
        },
        '.header-logo-title' : {
            margin: '10px 15px',                   
            fontFamily: 'Roboto sans-serif',
            fontSize: '30px',
            fontWeight: '700',
            color: '#A99E84',
            cursor: 'pointer',
        },
    }
})

export default UseStylesHeader;