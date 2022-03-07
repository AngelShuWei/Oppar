import './SignupForm.css';
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, NavLink} from "react-router-dom";
import * as sessionActions from "../../store/session";
import logo from '../../assets/opparFavicon2.png'

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/"/>
  )

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };
  return (
    <div className='page-container'>
      <form className='form-container' onSubmit={handleSubmit}>
      <img src={logo} alt='opparlogo' style={{width:'22px'}}/>
      <h2>Sign up for Oppar</h2>
      <label>
        Email
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          />
      </label>
      <label>
        Username
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          />
      </label>
      <label>
        Confirm Password
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          />
      </label>
          <ul>
            {errors.map((error, idx) => <p key={idx}>{error}</p>)}
          </ul>
      <button className='sign-button' type="submit">Sign Up</button>
      <p className='member'>Already an Oppar member?<NavLink className='link' to='/login'> Log in here.</NavLink></p>
    </form>
    </div>
  );
}

export default SignupFormPage;
