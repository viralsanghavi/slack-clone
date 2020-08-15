import React from 'react'
import './LoginPage.css'
import { Button } from '@material-ui/core'
import { auth, provider } from './firebase'
import { useStateValue } from './StateProvider'
import { actionType } from './reducer'
function LoginPage() {
    const [{ user }, dispatch] = useStateValue()
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionType.SET_USER,
                    user: result.user

                })
                // store Object as local Storege
                localStorage.setItem('name', JSON.stringify(result.user))

            })
            .catch((error) => alert(error.message))
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://a.slack-edge.com/bv1-8/slack_logo-ebd02d1.svg" alt="" />

                <h1>SignIn</h1>

                <Button onClick={signIn}>SignIn with Google</Button>
            </div>
        </div>
    )
}

export default LoginPage
