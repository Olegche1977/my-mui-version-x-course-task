import {Alert, Snackbar} from '@mui/material'

function Snack({isSnackOpen, setSnackOpen}){
    return (
        <Snackbar
            open={isSnackOpen}
            onClose={setSnackOpen}
            autoHideDuration={1000}
            
        >
            <Alert
                onClose={setSnackOpen} severity="success" sx={{ width: '100%', background:'olive' }}
            >
                Book added to cart
            </Alert>
        </Snackbar>
    )
}

export default Snack;