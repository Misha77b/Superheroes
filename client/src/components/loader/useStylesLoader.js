import { makeStyles } from '@mui/styles';

const useStylesLoader = makeStyles({
    '@global': {
        ".loader-wrapper": {
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alingItem: 'center',
            width: '100%',
            height: '100%',
            zIndex: '10'
        },
        ".loader": {
            margin : 'auto',
            border: "10px solid #f3f3f3",
            borderTop: "10px solid #3498db",
            borderRadius: "50%",
            width: "80px",
            height: "80px",
            animation: "spin 1s linear infinite",
          }
    }
})

export default useStylesLoader;