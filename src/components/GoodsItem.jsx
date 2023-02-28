import React from 'react';
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import { Button, CardActions, CardContent, CardMedia, Divider, Typography, Tooltip } from '@mui/material';
import {Context} from './Context'
import {useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const GoodsItem = (props) => {
    const { title} = props;
    const{setIdBook} = useContext(Context)

    const navigate = useNavigate();

    const funcBookView =()=>{
        setIdBook(props.elem['id'])
        navigate("/specificbook");
    }

    return (
        <Grid item >
            <Card sx={{display:'flex',
                flexDirection:'column',
                justifyContent:'space-between',
                  height:'100%',
                  width:220,
                  backgroundColor:'lightblue'}}
                
            >
                <CardMedia
                    
                    image={props.elem['image'].length>5?props.elem['image']:"./logo192.png"}
                    component="img"
                    alt={title}
                    title={props.elem['title'].length>24? props.elem['title'].slice(0,24) + '...':props.elem['title']}
                    sx={{height:240, width:190, mt:'10px', ml:'10px'}}
                />
                <CardContent>
                    <Typography 
                        variant="h6"
                        component="span"
                        >   
                        
                        {props.elem['title'].length>24? props.elem['title'].slice(0,24) + '...':props.elem['title']}
                    </Typography>
                    <Divider/>
                    <Typography 
                        variant="span"
                        component="span"
                        >   
                        {props.elem['author']}
                        
                    </Typography>
                    <Typography variant="h6">Price: {props.elem.price}, $</Typography>
                </CardContent>   
                <CardActions>
                    <Tooltip title="About book.."> 
                    <Button 
                        variant="contained"
                        onClick= {()=>funcBookView()}
                        sx={{ml:''}}
                    
                        >View
                    </Button>
                    </Tooltip>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default GoodsItem;