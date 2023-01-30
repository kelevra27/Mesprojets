import React from "react";
import Confetti from 'react-confetti';
export default function Success() {
        function Random(len = 12){
        let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

        let code = [];

        for (let i = 0; i < len; i++) {
            let index = Math.floor(Math.random() * alphabet.length)
            code.push(alphabet.charAt(index))
        }
        code = code.join("");
        return code
    }

    let clef = Random();
    return (
        <>
            <h1> Félicitations et merci pour votre achat ! <br></br>
            Votre paiement a bien été effectué !
            </h1>
            <h2>
            Veuillez entrez cette clef dans votre console :
            </h2>

            <div className="clef"> 
            {clef} <br></br>
            <button style={{display: "flex"}} onClick={()=> {navigator.clipboard.writeText(clef)}}> Copy </button>
            </div>

            {/* <div className="confetti-wrap">
            <Confetti
            numberOfPieces={600}
            width={3000}
            height={"900vh"}
            />
            </div> */}
            
           
        </>
    )
}