import { makeStyles } from '@mui/styles';

const UseStylesModalContent = makeStyles({
    '@global': {
        '.form-wrapper': {
            display: 'flex', 
            flexDirection: 'column',
            gap: '10px',
        },
        '.form-group': {
            display: 'flex',
            flexDirection: 'column',
        },
        '.form-control': {
            width: '100%',
            padding: '10px 15px',
        },
        '.upload-image-label': {
        },
        '.image-input': {
            margin: 'auto',
            visibility: 'hidden',
            padding: '0',
            height: '10px'
        },
        '.file-upload-custom': {
            width: '100%',
            margin: ' 0 0 20px 0',
        },
        '.custom-file-upload-btn': {
            margin: '0 20px 0 0',
            padding: '4px 14px',
            color: '#CCCCCC',
            borderRadius: '4px',
            background: '#101415',
        },
        '.custom-file-upload-btn:hover': {
            background: '#0B0D0E',
        },
        '.uploaded-file-name': {
            display: 'inline-block',
            width: '250px',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
        },
    }
})

export default UseStylesModalContent;