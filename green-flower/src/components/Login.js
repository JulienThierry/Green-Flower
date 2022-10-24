import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef } from 'react';
import { auth } from '../utils/firebase.config';

const Login = () => {
    const loginEmail = useRef();
    const loginPassword = useRef();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail.current.value,
                loginPassword.current.value
            )
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div>
            <h1>Se connecter</h1>
            <form onSubmit={(e) => handleLogin(e)}>
                <input type="email" placeholder='Email' required ref={loginEmail} />
                <input type="password" placeholder='Mot de passe' required ref={loginPassword} />
                <input type="submit" value="Valider" />
            </form>
        </div>
    );
};

export default Login;