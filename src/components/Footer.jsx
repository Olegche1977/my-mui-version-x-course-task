// import './footer.css'
import { AppBar, Toolbar, Typography } from "@mui/material"

export default function Footer(){
    return(
        <>
        {/* <footer id="footer1" className="footer1">
            <h4 ><a href = "https://prometheus.org.ua/">Виконано в Prometheus © 2022</a></h4>
        </footer> */}

        <AppBar
        position = "static"
        style={{borderRadius:'10px'}}
        
    >
        <Toolbar
        sx={{justifyContent: "center"}}
        >
            <Typography
                variant="h6"
                component="span"
                
            >
                <a href = "https://prometheus.org.ua/">Виконано в Prometheus © 2022</a>
            </Typography>
        </Toolbar>
    </AppBar>
        </>
    )
}