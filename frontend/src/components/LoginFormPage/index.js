import './LoginForm.css'
import React, {useState} from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect, Link } from 'react-router-dom';
import logo from '../../assets/opparFavicon2.png'
import loginImg from '../../assets/songjoongki.jpg'

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/"/>
  );

  const handleSubmit = e => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({credential, password}))
      .catch(async (res) => { //if there is an error, then skip the res.ok and get the response
        const data = await res.json(); //parse the data again because we skipped the res.ok
        if (data && data.errors) setErrors(data.errors); //set the new Errors
      });
  }

  return (
    <div className='page-container'>
      <img src={loginImg} alt="leejongsuk" style={{width:"100%"}}/>
      <form className='form-container' onSubmit={handleSubmit}>
        <div className='icons-container'>
          <Link to='/'><i class='fa-lg fa-solid fa-arrow-left'/></Link>
          <img src={logo} alt='opparlogo' style={{width:'22px'}}/>
        </div>
        <h2>Log in to Oppar</h2>
        <label className='label-field'>Username or Email</label>
        <input className='input-field'
        type="text"
        value={credential}
        onChange={e => setCredential(e.target.value)}
        required
        />
        <label className='label-field'>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          />
        <ul>
          {errors.map((error, idx) => <p key={idx}>{error}</p>)}
        </ul>
        <button className='sign-button' type="submit">Sign In</button>
        <button className='sign-button' type="submit">Demo User</button>
        <p className='member'>Not an Oppar member?<NavLink className='link' to='signup'> Sign up here.</NavLink></p>
      </form>
    </div>
  );
}

export default LoginFormPage;
