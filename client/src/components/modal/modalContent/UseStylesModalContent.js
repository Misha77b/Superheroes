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
        '.textarea': {
            resize: 'none',
        },
        '.form-control': {
            width: '100%',
            padding: '10px 15px',
            borderRadius: '15px',
            boxSizing: 'border-box',
        },
        '.image-form': {
            margin: 'auto'
        }
    }
})

export default UseStylesModalContent;