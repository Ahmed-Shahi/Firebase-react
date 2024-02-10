import React, { useState } from 'react';
import { app } from '../FIREBASE-Config/Config'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { Link, useNavigate } from 'react-router-dom';
// import './SignUp.css'    

const db = getDatabase(app);
const auth = getAuth(app);

function SignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

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
                setUsername('');
                setPassword('');
                navigate('/SignIn')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(error.errorMessage);
                setUsername('');
                setPassword('');
            });

        // console.log('Logging in with:', username, password);
    };

    return (
        <div >
        <div className='rounded-5 rounded-top-5'  style={{
            textAlign: 'center', marginTop: '30px'
            , backgroundColor: 'rgba(255, 255, 255, 0.3)'
            , height: '400px',width:'300px', color: 'black',
            boxShadow: '20px 20px 30px  rgba(0, 0, 0, 0.3)' /* Adding more prominent shadow */

        }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h2 className='text-dark'>SIGN UP</h2>
            </div>
            <br />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <input
                    className='form-control rounded-pill'
                    type="email"
                    placeholder="Enter Email Here..."
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{ padding: '10px', margin: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '300px' }}
                />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <input
                    className='form-control rounded-pill'
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ padding: '10px', margin: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '300px' }}
                />
            </div>
            <br />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {/* <Link to={'/SignIn'}>  */}
                <button
                    className='rounded-pill'
                    onClick={handleLogin}
                    style={{ padding: '10px 20px', margin: '10px', borderRadius: '5px', border: 'none', background: '#007bff', color: '#fff', cursor: 'pointer' }}
                >
                    SIGN UP
                </button>
                {/* </Link> */}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h1 style={{ fontSize: "20px" }}>Have an Account??
                    <span><Link to={'/SignIn'} style={{ textDecoration: 'none' }}> Login </Link> </span> </h1>
            </div>
        </div>
        </div>
    );
}
export default SignUp