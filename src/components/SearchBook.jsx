import { TextField } from "@mui/material";

const SearchBook = (props) => {
    const { onChange, value } = props;

    return <TextField 
                type='search' 
                label="search"
                value={value}
                onChange={onChange} 
                placeholder='input book for search'
                sx={{mt:'1rem'}}
            />;
};

export default SearchBook;