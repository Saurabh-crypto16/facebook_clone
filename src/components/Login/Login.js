import { Button } from '@material-ui/core';
import React from 'react'
import "./Login.css";
import {auth,provider} from "./firebase";
import {actionTypes} from "./reducer";
import {useStateValue} from "./StateProvider";



function Login() {
    //using hook to pull info from data set
    const [state,dispatch]=useStateValue();

    const signIn=()=>{
        //when we click sign in button
        auth
        .signInWithPopup(provider)
        .then((result) => {
            //this pushes the user inside the data layer
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
            console.log(result);
        })
        .catch((error) => {
        alert(error.message);
        });
    };

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/150px-Facebook_f_logo_%282019%29.svg.png"
                alt=""/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/294px-Facebook_Logo_%282019%29.svg.png"
                alt=""/>
            </div>
            <Button type="submit" onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
