import React, { useState } from 'react';
import { app } from '../FIREBASE-Config/Config'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

const db = getDatabase(app);
const auth = getAuth(app);

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        
        createUserWithEmailAndPassword(auth, username, password)
            .then((userCredential) => {
                const user = userCredential.user;
                set(ref(db, `User/${user.uid}`),
                      {
                        Email: `${username}`,
                        Password: `${password}`,
                      })                
                alert('Successfully Sign UP')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error);
            });

        console.log('Logging in with:', username, password);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h2>Login</h2>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <input
                    className='form-control'
                    type="email"
                    placeholder="Enter Email Here..."
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{ padding: '10px', margin: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '300px' }}
                />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <input
                    className='form-control'
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ padding: '10px', margin: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '300px' }}
                />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <button
                    onClick={handleLogin}
                    style={{ padding: '10px 20px', margin: '10px', borderRadius: '5px', border: 'none', background: '#007bff', color: '#fff', cursor: 'pointer' }}
                >
                    Login
                </button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h1 style={{ fontSize: "20px" }}>Do not have an Account??<span></span> </h1>
            </div>
        </div>
    );
}

export default LoginPage;
