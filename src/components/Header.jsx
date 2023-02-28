import { ShoppingBasketRounded } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography, Button, Tooltip, Badge} from "@mui/material";
import { Context } from "./Context";
import {useContext} from 'react';
import {useNavigate} from 'react-router-dom';


const Header = () => {
   
    const {userName, setUserName, booksChoosen, setBooksChoosen} = useContext(Context)
    const navigate = useNavigate();
  
    const buttonSignOutClickHandler=()=>{
      setBooksChoosen([]);
      setUserName('');
      navigate("/")
    }  
  
    const buttonCartClickHandler=()=>{
      if(booksChoosen.length > 0){
      navigate("cartadded")}else{
      navigate("cart")}
    }
      
  const clickOnUser = ()=>{
    if(!userName){
      navigate("/")
    }else{navigate("/booklist")}
    
  }
    return (<>
    
    <AppBar
        position = "static"
        style={{borderRadius:'10px'}}
    >
        <Toolbar>
            <Typography
                variant="h6"
                component="span"
                sx={{flexGrow:1}}
            >
                X-Course-Task Oleg Chesnokov
            </Typography>

            
            <Tooltip title="Add books to by">
                
                <Badge 
                  badgeContent={booksChoosen.length}
                  color="success"
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  >
                  <IconButton
                    color="inherit"
                    onClick= {buttonCartClickHandler}
                    >
                    <ShoppingBasketRounded/>
                  </IconButton>
                </Badge> 
            </Tooltip>
            <Button 
              variant="contained"
              onClick={buttonSignOutClickHandler}
            >Sign-Out</Button>
            <img src="./avatar.png"  alt="" width="50px" height="50px"/>
            <h6 onClick={clickOnUser}>{userName}</h6>
        </Toolbar>
    </AppBar>
    
    
    </>
    );
};

export default Header;