import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../Firebase"
import { GoogleAuthProvider } from "firebase/auth";



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
                            resolve({ payload: "Email Sucessfull" });
                        } else {
                            resolve({ payload: "Plese verify your Email" });
                        }
                    } else {
                        reject({ payload: "wrong verify" }); // user ne kai no malt to 
                    }
                })
            })

            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // reject(errorCode);

                if (errorCode.localeCompare("auth/alerday use-email") === 0)
                    reject({ payload: "email already Ragistared" });
                else {
                    reject({ payload: errorCode });
                }

            });
    })

}

export const LoginAPI = (data) => {
    console.log(data);
    return new Promise((resolve, reject) => {

        signInWithEmailAndPassword(auth, data.email, data.password)

            .then((user) => {
                console.log(user);
                if (user.user.emailVerified) {
                    resolve({ payload: user.user });
                }
                else {
                    reject({ payload: "please verfity your email" });
                }
                // console.log(user);        
            })

            .catch((error) => {
                if (error.code.localeCompare("auth/wrong-password") === 0) {
                    reject({ payload: "wrong email or password" })
                }
                else if (error.code.localeCompare("auth/user-not-found") === 0) {
                    reject({ payload: "please ragistred email" })
                }
                else {
                    reject({ payload: error.code });
                }
                // console.log(error); 
            });

    })
}

export const LogoutAPI = () => {
    return new Promise((resolve, reject) => {
        signOut(auth)
            .then((user) => {
                resolve({ payload: "Logout sucessfull" })
            })

            .catch((error) => {
                reject({ payload: error.code })
                // console.log(error); 
            });

    })
}

export const googleLoginAPI = () => {
    const provider = new GoogleAuthProvider();
    return new Promise((resolve, reject) => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;

                resolve({ payload: user })

            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                
                reject({ payload: errorCode })
            });
    })
}