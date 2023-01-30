import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "../stripe/CheckoutForm";

const PUBLIC_KEY =  "pk_test_51LrHRtE1NP521b4nTPCQq71St1S6yIjUNGG9HLrp74xqusfvcIFk6srVm9SeOExp6Cq7ZysYXFtXUfcii43vEPQj00HklYDE6F";
const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = ()=>{
    return (
        <Elements stripe={stripeTestPromise} >
            <CheckoutForm />
        </Elements>
    );
};
export default Stripe;