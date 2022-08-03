import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification } from "firebase/auth";
import { auth } from "../../Firebase"



export const SignAPI = (data) => {
    console.log(data);
    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);

                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        sendEmailVerification(user)
                        const uid = user.uid;
                        // ...
                    } else {
                        
                    }
                })
                // ...
            })
            .then((emailVerified) => {
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        if (user.emailVerified) {
                            console.log("Email Sucessfull");
                        } else {
                            console.log("Plese verify your Email");
                        }
                    } else {
                        console.log("wrong verify"); // user ne kai no malt to 
                    }
                })
            })

            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                 
                if(errorCode.localeCompare("auth/alerday use-email") == 0)
                console.log("already RagistarEmail");
            });
    })
}