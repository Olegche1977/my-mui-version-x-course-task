import React from 'react';
// import Grid from '@mui/material/Grid'
import GoodsItem from './GoodsItem';
import {useContext, useState} from 'react';
import {Context} from './Context';
import SearchBook from './SearchBook';
import { Navigate } from 'react-router-dom'
import { Grid} from "@mui/material";
import SelectByPrice from './Select-byprice';


const GoodsList = () => {
    const{userName, books} = useContext(Context)
    const [inputNameBook, setInputNameBook] = useState('')
    const [selectPriceBook, setSelectPriceBook] = useState('')

    let arrPriceFlag = [0,Infinity];
    switch(selectPriceBook){
    case "value1":
    arrPriceFlag=[0,Infinity];
    break;
    case "value2":
    arrPriceFlag=[0,15];
    break;
    case "value3":
    arrPriceFlag=[15,30];
    break;
    case "value4":
    arrPriceFlag=[30,Infinity];
    break;
}

const funcChangeInputNameBook=(e)=>{
  setInputNameBook(e.target.value)
}

  if(!userName){
    return <Navigate to="/"/>
  }

    return (<>
            <SearchBook
            value={inputNameBook}
            onChange={funcChangeInputNameBook}
            />

          <SelectByPrice
            value={selectPriceBook}
            onChange={setSelectPriceBook}
          />
        
            <Grid container spacing={2} sx={{minHeight:"100vh" , mt:'2px', mb:'5px', justifyContent: "center"}}>
                {books.map(elem=>{return (elem['title'].toLowerCase().includes(inputNameBook.toLowerCase())) && ((arrPriceFlag[0]<Number(elem['price'])) && (Number(elem['price'])<arrPriceFlag[1]))? 
                    <GoodsItem
                        key={elem['id']}
                        elem={elem}
                    />:null})}
            </Grid>    
            </> 
    );
};

export default GoodsList;