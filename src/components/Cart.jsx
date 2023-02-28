import { Container, Box, Button} from "@mui/material";
import { Navigate } from 'react-router-dom'
import { useState, useContext } from 'react';
import {Context} from './Context'

export default function Cart() {
    const{userName} = useContext(Context);
    if(!userName){
        return <Navigate to="/"/>
      }

    return <>
        <Container 
            maxWidth="sm"
            alignItems="center"
            justify="center"
            sx={{minHeight:'100vh', width:'150px'}}
            >
                <img  src="./cart.svg" width="100px" height="100px" alt=""/>
                <h4>Cart empty...</h4>
            
        </Container>
    </>
}