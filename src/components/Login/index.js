import React, {useState} from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase/firebaseConfig';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {

  const navigate = useNavigate()

  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');
  const [error, setError] = useState('')

  const handleSubmit = e =>{
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
    .then(user =>{
      setEmail('')
      setPassword('')
      navigate('/home')
    })
    .catch(error =>{
      setError(error)
      setEmail('')
      setPassword('')
    })
  }

  const err = error !=='' && <span>{error.message}</span>


  const btn = email ==='' || password ==='' ? <button disabled>Login</button>: <button>Login</button>

  return (
    <div>
      <h1>Login</h1>

      {err}
      
      <form onSubmit={handleSubmit}>
        <div>
          <input onChange={e => setEmail(e.target.value)} type='email' value={email} placeholder='Email'/>
        </div>
        <div>
          <input onChange={e=> setPassword(e.target.value)} type='password' value={password} placeholder='Password'/>
        </div>
        <div>

          {btn}

        </div>
        <div>D'ont have an account yet? <Link to='/'>Register</Link></div>
      </form>
    </div>
  )
}

export default Login