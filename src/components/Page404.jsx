import React from "react";
import { Container} from "@mui/material";

export default function Page404(){
    return <>
     <Container 
            maxWidth="sm"
            alignItems="center"
            justify="center"
            sx={{minHeight:'100vh', width:'500px'}}
            >
               <h1> Something went wrong..</h1>
            
        </Container>
    </>
}