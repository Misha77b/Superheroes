import { makeStyles } from "@mui/styles"

const useStylesSuperheroList = makeStyles({
    '@global': {
        '.superheroList': {
            width: '100%', 
            display: 'grid', 
            justifyContent: 'center',
            gridTemplateColumns: 'repeat(auto-fill, 400px)',
            gridAutoRows: 'auto',
            gridGap: '20px'
        }
    }
})

export default useStylesSuperheroList