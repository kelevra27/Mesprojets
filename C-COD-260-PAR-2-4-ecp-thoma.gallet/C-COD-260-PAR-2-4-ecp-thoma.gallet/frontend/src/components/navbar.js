import React, { useEffect, useState } from "react"
import { Button } from "@mui/material";
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import ShoppingCart from "@mui/icons-material/ShoppingCart";

export default function Navbar(props) {
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const [isLogged, setIsLogged] = useState(false);
    const [openSnack, setOpenSnack] = useState(false);


    // const [isAdmin, setIsAdmin] = useState(false);
    
    useEffect(() => {
        setIsLogged(props.isConnected)
        if (localStorage.getItem("token") !== null) {
            setIsLogged(true)
        }
    }, [props.isConnected])

    const logout = async (e) => {
        e.preventDefault()
        localStorage.clear();
        if (localStorage.getItem("token") === null) {
            setIsLogged(false)
            setOpenSnack(true)
        }
    }
    const displayConnected = () => {
        if (isLogged === true) {
            return (
                <>
                    <Button variant="contained" style={{height: 60}} size="small" color="success" >
                        <li>
                            <a href="/setting">Settings</a>
                        </li>
                    </Button>

                    <Button variant="contained" style={{height: 60}}  color="success" >
                        <li>
                            <a href="/" onClick={logout}>Logout</a>
                        </li>
                    </Button>

                    <Button color="success" variant="contained" style={{height: 60}}>
                        <li> 
                            <a href="/admin">Admin</a>
                        </li>
                    </Button>
                </>
            )
        } else {
            return (
                <>
                    <Button variant="contained"  style={{height: 60}}color="success"  >
                        <li>
                            <a href="/login">Login</a>
                        </li>
                    </Button>
                    <Button variant="contained" style={{height: 60}} color="success" size="small" >
                        <li>
                            <a href="/register">Register</a>
                        </li>
                    </Button>
                </>)
        }
    }


    // will receive props
    return (
        <div className="container-nav" style={{height: 100}}>
            <div id="navBar">
                <nav>

                    <ul>
                        <Stack direction="row" spacing={1}>
                            <li>  </li>
                            <Button variant="outlined" style={{height: 60}} color="success"> 
                                <li> <a href="/"><img src={("./img/logo.png")} alt="logo" width="80" height="60"></img></a> </li>
                            </Button>
                            
                            <Button variant="outlined" style={{height: 60}}color="success" >
                                <li> <a href="/playstation" style={{fontSize: 18}}>Playstation 5</a> </li>
                            </Button>
                            <Button variant="outlined" style={{height: 60}} size="small" color="success" >
                                <li> <a href="/xbox">Xbox</a> </li>
                            </Button>
                            <Button variant="outlined" style={{height: 60}} size="small" color="success" >
                                <li> <a href="/pc">Pc</a> </li>
                            </Button>
                            <Button variant="outlined" style={{height: 60}} size="small" color="success" >
                                <li> <a href="/switch">Switch</a> </li>
                            </Button>
                            {displayConnected()}
                            <Button variant="outlined" style={{height: 60}} size="medium" color="success">
                                <li> <a href="/cart"> <ShoppingCart /> </a></li>
                            </Button>

                        </Stack>

                    </ul>
                </nav>
            </div>
            <Snackbar open={openSnack} autoHideDuration={2000} onClose={() => setOpenSnack(false)}>
                    <Alert onClose={() => setOpenSnack(false)} severity="info" sx={{ width: '100%' }}>
                        Déconnecté 
                    </Alert>
                </Snackbar>
        </div>
    )
}

