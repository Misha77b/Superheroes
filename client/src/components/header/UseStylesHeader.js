import { makeStyles } from '@mui/styles';

const UseStylesHeader = makeStyles({
    '@global': {
        '.header': {
            width: '100%',
            height: '80px',
            background: 'rgb(228,221,244)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between', 
            // position: 'sticky',
            // top: '0',
            // zIndex: '10',
            // boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'
        },
        '.header-logo-title' : {
            margin: '10px 15px',                   
            fontFamily: 'Roboto sans-serif',
            fontSize: '30px',
            fontWeight: '700',
            color: 'rgb(45,45,45)',
            cursor: 'pointer',
        },
    }
})

export default UseStylesHeader;