import React, { useState } from "react";
import { Button } from "@mui/material";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
// import CircularProgress from '@mui/material/CircularProgress';

const CENTS_TO_EUROS = 100;

export const CheckoutForm = (achats) => {
    let history = useNavigate();
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const [openSnack, setOpenSnack] = useState(false);

    // const [achat, setAchat] = useState([]);

    const stripe = useStripe();
    const elements = useElements();

    // const purchase = async (event) => {
    //     const token = await localStorage.getItem("token")
    //     event.preventDefault()
    //     let res = await fetch(`http://localhost:8000/users/achats`, {
    //         method: "POST",
    //         headers: {
    //             "Content-type": "application/json",
    //             "Accept": "application/json",
    //             'Authorization': 'Bearer ' + token,
    //         },
    //         body: JSON.stringify({ achat })
    //     });
    //     if (res.status === 200) {
    //         res = await res.text();
    //         achats.push(achat)
    //         console.log("Achat ajouté")
    //     }
    // }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        });

        const getPrice = async (price) => {
            const a = JSON.parse(await localStorage.getItem("cart"));
            const result = a.reduce(function (acc, obj) { return acc + obj.price; }, 0);
            return result * CENTS_TO_EUROS
        }


        if (!error) {
            console.log("Token", paymentMethod)
            // envoi du token au back
            try {
                const { id } = paymentMethod;
                const price = await getPrice();
                const response = await axios.post("http://localhost:8000/stripe/charge",
                    {
                        amount: price,
                        id: id,
                    });
                if (response.data.success) {
                    console.log("Paiement réussis")

                    history('/success')
                    localStorage.clear()
                    setOpenSnack(true)
                }
            } catch (error) {
                console.log("Erreur ! ", error)
                // alert("Erreur ! ", error)
            }
        } else {
            // console.log(error.message);
            console.log("ERROR")
            // alert('Error')
        }

    }
    // if(paymentMethod === undefined){
    //     <CircularProgress color="inherit" />
    // }else{

    return (
        <div>
            <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
                <CardElement
                    options={{
                        hidePostalCode: true
                    }}
                />
                <Button onClick={handleSubmit}> Pay </Button>
            </form>
            <Snackbar open={openSnack} autoHideDuration={850} onClose={() => setOpenSnack(false)}>
                <Alert onClose={() => setOpenSnack(false)} severity="sucess" sx={{ width: '100%' }}>
                    Paiement effectué
                </Alert>
            </Snackbar>
        </div>

    )
    // }
}