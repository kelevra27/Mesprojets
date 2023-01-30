import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
// import Snackbar from '@mui/material/Snackbar';
// import MuiAlert from '@mui/material/Alert';


// import handleLogin from "react-google-login";

export default function Login({ setIsConnected }) {

    // const Alert = React.forwardRef(function Alert(props, ref) {
    //     return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    // });

    let history = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [openSnack, setOpenSnack] = useState(false);


    async function login(event) {
        event.preventDefault()
        console.log(email, password)
        let item = { email, password };
        let res = await fetch("http://localhost:8000/user/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item),
        });
        if (res.status === 200) {
            res = await res.json();
            // console.log(res)
            localStorage.setItem("token", res.token)
            // localStorage.setItem("id",res._id)
            localStorage.getItem(JSON.stringify(res))
            setIsConnected(true)
            // setOpenSnack(true)
            history("/");
        }
        else {
            alert("ERROR UNVALID CREDS")
        }
    }
        

    return (
        <div className="formLogin">

            <h2>Login</h2>
            <form onSubmit={(e) => login(e)}>
                <input type="email" onChange={e => setEmail(e.target.value)} placeholder="email" required />
                <br />
                <input type="password" onChange={e => setPassword(e.target.value)} placeholder="password" required />
                <br />
                <button type="submit">Login</button>
                <br />
                <br />
                <div className="Link">
                    <button><Link to="/register">Register an account</Link></button>
                </div>


            </form>
            {/* <Snackbar open={openSnack} autoHideDuration={850} onClose={() => setOpenSnack(false)}>
                    <Alert onClose={() => setOpenSnack(false)} severity="warning" sx={{ width: '100%' }}>
                        Connecté !
                    </Alert>
    </Snackbar> */}
        </div>


    );
}