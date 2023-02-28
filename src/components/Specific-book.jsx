import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Context } from './Context'
import {Button, Typography, Box, Paper, Divider, TextField} from '@mui/material';
import { Container} from "@mui/system";
import Snack from './Snack'

export default function SpecificBook() {
  const [isSnackOpen, setSnackOpen]=useState(false)
  const {
    userName,
    setUserName,
    books,
    setBooks,
    idBook,
    booksChoosen,
    setBooksChoosen,
  } = React.useContext(Context); //instead importing useContext from react in head
  let flag = false;
  let initValueNumberBooks = 0;
  booksChoosen.map((elem) => {
    if (elem.id === idBook) {
      flag = true;
      initValueNumberBooks = elem.number;
    }
  });

  const [valueNumberOfBooks, setValueNumberOfBooks] =
    useState(initValueNumberBooks);

  const setNumberOfBooks = (e) => {
    setValueNumberOfBooks(e.target.value);
    if (e.target.value < 0) {
      setValueNumberOfBooks(0);
    }
    if (e.target.value > 42) {
      setValueNumberOfBooks(42);
    }
  };

  function editBooksChoosen(elem) {
    const editArr = booksChoosen.slice();
    const result = editArr.filter((element) => elem !== element.id);
    setBooksChoosen([...result, { id: elem, number: +valueNumberOfBooks }]);
    setSnackOpen(true)
  }

  if (!userName) {
    return <Navigate to="/" />;
  }

  return (
    <>
    
      {books.map((elem, index) => {
        return elem["id"] === idBook ? (
        <Container key={index}>
          <Container key={index} sx={{mt:'1rem', justifyContent:'center'}}>
          
          <Box
            sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
             m: 1,
            width: 250,
            height: 300,
            mb:'2rem'
            },
            }}
          >
            <Paper elevation={0}>
            <img
                 
                  src={
                    elem["image"].length > 5 ? elem["image"] : "./logo192.png"
                  }
                  alt="Image Not Found"
                  width="200px"
                  height="300px"
                />
            </Paper>
            <Paper elevation={3}>
                <Typography
                    variant="h6"
                    component="span"
                >
                    <Divider textAlign="left" sx={{color:'lightblue', fontSize:'15px'}}>Book name:</Divider>
                     {elem["title"]}
                    <Divider textAlign="left" sx={{color:'lightblue',fontSize:'15px'}}>Book Author:</Divider>
                    {elem["author"]}
                     <Divider textAlign="left" sx={{color:'lightblue',fontSize:'15px'}}>Book level:</Divider>
                     Middle
                     <Divider textAlign="left" sx={{color:'lightblue',fontSize:'15px'}}>Book tags:</Divider>  
                    no
                   
                </Typography>
   
            </Paper>
            <Paper elevation={3}>
                <Typography
                    sx={{ml:'1px'}}
                    variant="h6"
                    component="span"
                >
                    Price, $:{elem["price"]}
                    <Divider sx={{color:'white'}}/>
                      Count: <TextField 
                      data-testid="books-qty"
                      type='number' 
                      label="quantity"
                      variant="standard"
                      value={valueNumberOfBooks}
                      onChange={(e) => setNumberOfBooks(e)} 
                      placeholder='input quantity'
                      sx={{width:'100px'}}
                      />
                      <Divider sx={{color:'white'}}/>
                      Total Price, $:
                      <Typography
                      variant="h6"
                      component="span"
                      data-testid="total-price"
                      >
                      {(elem["price"] * valueNumberOfBooks).toFixed(2)}
                      </Typography>
                </Typography> 
                <Button
                  
                  variant="contained"
                  onClick={() => editBooksChoosen(elem.id)}
                  type="submit"
                  sx={{ml:'1rem', mt:'2rem'}}
                  disabled={valueNumberOfBooks > 0 ? false : true}
                  
                  >
                  Add to cart</Button>
            </Paper>
          </Box>

          </Container>    
          <Typography
              variant="h6"
              component="span"
            >
                Book description: {elem["description"]}
          </Typography>
        </Container>
        ) : null;
      })}

        <Snack
          isSnackOpen={isSnackOpen}
          setSnackOpen={()=>setSnackOpen(false)}
          />

    </>
  );
}