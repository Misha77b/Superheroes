import { makeStyles } from "@mui/styles";

const UseStylesPaginationControl = makeStyles({
    '@global': {
        '.MuiPaginationItem-root:nth-child(n)': {
            color: '#CCCCCC',
            // fontWeight: 'bold'
        },
        '.MuiPaginationItem-root:nth-child(n).Mui-selected': {
            color: '#000000',
            background: 'white'
        },
        ".MuiPaginationItem-icon": {
            color: "white",
        },
    }
});

export default UseStylesPaginationControl