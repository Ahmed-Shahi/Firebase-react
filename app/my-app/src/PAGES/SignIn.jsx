import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { app } from '../FIREBASE-Config/Config'
import { getAuth, signInWithEmailAndPassword,GoogleAuthProvider ,signInWithPopup } from "firebase/auth";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export default function SignIn() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  

  const handleLogin = () => {
  
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {

        const user = userCredential.user;
        alert('Successfully Login')
        setUsername('');
        setPassword('');
        localStorage.setItem('Email', username)
        navigate('/Profile')

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(error.errorMessage)
        setUsername('');
        setPassword('');

      });
    }
      const handleGoogle = ()=>{
        signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      alert('Successfully Login')
      navigate('/Profile')


      const user = result.user;
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
    }
  
  return (
    <div className='rounded-5 rounded-top-5 ' style={{
      textAlign: 'center', marginTop: '30px'
      , backgroundColor: 'rgba(255, 255, 255, 0.3)'
      , height: '400px', color: 'black',
      boxShadow: '20px 20px 30px  rgba(0, 0, 0, 0.3)' /* Adding more prominent shadow */
    }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h2>SIGN IN</h2>
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
        <button
        className='rounded-pill'
          onClick={handleLogin}
          style={{ padding: '10px 20px', margin: '10px', borderRadius: '5px', border: 'none', background: '#007bff', color: '#fff', cursor: 'pointer' }}
        >
          SIGN IN
        </button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <button
        className='rounded-pill'
          onClick={handleGoogle}
          style={{ padding: '10px 20px', margin: '10px', borderRadius: '5px', border: 'none', background: '#007bff', color: '#fff', cursor: 'pointer' }}
        >
          SIGN IN With Google
        </button>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h1 style={{ fontSize: "20px" }}>Do not have an Account??
          <span
          ><Link to={'/'} style={{ textDecoration: 'none' }}> Sign UP</Link> </span>
        </h1>
      </div>
    </div>
  )
}
