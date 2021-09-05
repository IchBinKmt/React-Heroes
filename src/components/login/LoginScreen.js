import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';

export const LoginScreen = ({history}) => {
    const {dispatch} = useContext(AuthContext);
    const handleLogin = () => {
        dispatch({
            type: types.login,
            payload: {
                name: 'Luis Angel'
            }
        })
        const last_path = localStorage.getItem('last_path') || '/';
        history.replace(last_path);
    }
    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr/>

            <button
                className="btn btn-primary"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}
