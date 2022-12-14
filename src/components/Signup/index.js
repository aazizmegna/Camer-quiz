import React, {useState} from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase/firebaseConfig';

import {Link, useNavigate} from 'react-router-dom'

const Signup = (props) => {

    const data={
        username:'',
        email:'',
        password:''
    }

    const [registerData, setRegisterData] = useState(data)
    const [error, setError] = useState('')

    const {username, email, password} = registerData;

    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();

        const {email, password} = registerData;
        createUserWithEmailAndPassword(auth, email, password)
        .then (user =>{
            setRegisterData({...data})
            navigate('/login', { replace: true});

        })
        .catch(error => {
            setError(error)
            setRegisterData({...data})
        })        
    }

    const err = error !=='' && <span>{error.message}</span>
    const btn = username ==='' || email ==='' || password ==='' ? <button disabled>Regester</button>: <button>Regester</button>

  return (
    <div className='loginStart'>
        <h1>Signup</h1>

        {err}

        <form onSubmit={handleSubmit}>
            <div>
                <input type='text' onChange={e => setRegisterData({...registerData, [e.target.id] : e.target.value})} id='username' value={username} placeholder = 'Username' required/>
            </div>
            <div>
                <input type='email' onChange={e => setRegisterData({...registerData, [e.target.id] : e.target.value})} id='email' value={email} placeholder = 'Email' required/>
            </div>
            <div>
                <input type='password' onChange={e => setRegisterData({...registerData, [e.target.id] : e.target.value})} id='password'value={password} placeholder='Password' required/>
            </div>
            <div>
                {btn}
            </div>
            <div>Already a member ? <Link to='/login'>Login</Link></div>
        </form>
    </div>

  )
}

export default Signup