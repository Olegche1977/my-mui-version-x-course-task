import {useNavigate, Navigate} from "react-router-dom"
import React from 'react'
import {useContext} from 'react'
import {Context} from './Context'
import { Button, Grid, Typography, Box, Divider } from "@mui/material";

export default function CartAdded() {
    const navigate = useNavigate();
    const {userName, setUserName, books, setBooks, booksChoosen, setBooksChoosen} = useContext(Context)
    
    const removeAll=()=>{
        setBooksChoosen([])
        navigate("/cart")
    }
    const removeElem=(elem)=>{
        const remArr = booksChoosen.slice(); 
        const result = remArr.filter(element => elem.id!==element.id);
            setBooksChoosen(result)
            if(booksChoosen.length === 1){
                navigate("/cart")
            }
    }

   let total = booksChoosen.reduce((acc,elem)=>{return acc+ Number(elem['number'])*Number(books[elem['id']-1]['price'])},0).toFixed(2)

       if(!userName){
          return <Navigate to="/"/>
        }

    return <>
        <Button 
          variant="outlined" 
          color="success"
          onClick={removeAll}
          sx={{mt:'10px', ml:'80vw'}}
        >Purchase</Button>

        <Grid container
          spacing={2}
          direction="column"
          alignItems={'center'}
          justifyContent={'start'}
          sx={{minHeight:"100vh" , mt:'2px', mb:'5px'}}>
          {booksChoosen.map((elem, index)=>{

            return <Grid item
                  key={index}
            >

                <Box
                  display="flex"
                  flexDirection={'row'}
                  justifyContent='space-between'
                  height="70px"
                  width="85vw"
                  sx={{background:'lightgrey', padding:'3px', borderRadius:'2px'}}
                > 
                    <Typography
                      sx={{fontSize:'12px'}}
                    >
                      Book Name: <strong>{books[elem['id']-1]['title']}</strong>
                      <Divider/>
                      Book Count:<strong>{elem['number']}</strong>
                      <Divider/>
                      Book Price:<strong> {books[elem['id']-1]['price']},$</strong>
                      <Divider/>
                      Total price:<strong>{(Number(elem['number'])*Number(books[elem['id']-1]['price'])).toFixed(2)},$</strong>
                    </Typography>
                    <Typography>
                      <Button 
                        variant="outlined" 
                        color="error"
                        onClick={()=>removeElem(elem)}
                        sx={{m:'15px'}}
                      >Delete from the Cart</Button>
                    </Typography>
                </Box>
        </Grid>})}

        <Typography
          variant="h6"
          component="h6"
        >
            Total: {total},$
        </Typography>
    </Grid> 
    </>
}