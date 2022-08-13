import { makeStyles } from "@mui/styles"

const useStylesSuperheroList = makeStyles({
    '@global': {
        '.superheroList': {
            width: '100%', 
            display: 'flex', 
            justifyContent: 'space-betwen', 
            justifyContent: 'center', 
            flexWrap: 'wrap',
        }
    }
})

export default useStylesSuperheroList