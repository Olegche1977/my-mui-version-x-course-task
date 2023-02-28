import { FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const SelectByPrice = (props) => {
    const { onChange, value } = props;

    return <>
    
        <FormControl sx={{ mt: '1rem', minWidth: 200 }}>
            <InputLabel id="label">sort by price:</InputLabel>
              <Select
                labelId="label"
                id="select"
                value={value}
                label="sort by price:"
                onChange={event=>{onChange(event.target.value)}}
                >
                <MenuItem value={'value1'}>all books</MenuItem>
                <MenuItem value={'value2'}>price 0-15$</MenuItem>
                <MenuItem value={'value3'}>price 15-30$</MenuItem>
                <MenuItem value={'value4'}>higher 30$</MenuItem>
              </Select>
          </FormControl>
        </>
    };
              
    export default SelectByPrice;