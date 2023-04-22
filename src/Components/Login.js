import { React, useState } from 'react';
import ProfilePage from './ProfilePage';

import { Link, NavLink } from "react-router-dom"

const Login = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const submit = e => {

        e.preventDefault();
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                username: username,
                password: password,
            })
        })
            .then(res => {
                if (res.status == 200) {
                    res.json()
                        .then(data => {
                            console.log(data);
                            if (data.message !== "Invalid credentials") {
                                console.log(data)
                                localStorage.setItem('token', data.token);
                                localStorage.setItem('id', data.id);
                                window.location.href = "/profilePage"
                            }
                            else {
                                alert(data.message);
                            }
                        })
                }
                else{
                    throw new Error(res.status);
                }
            })
            .catch(err => {
                alert(err)
            })

    }

    return (
        <div className="form">
            <h1>Login</h1>

            <form>
                <input type="text" placeholder='Username...' onChange={e => setUserName(e.target.value)} />
                <input type="password" placeholder='Password...' onChange={e => setPassword(e.target.value)} />
                <NavLink to="/profilePage" onClick={submit}>Login</NavLink>
            </form>
        </div>

    )
}

export default Login