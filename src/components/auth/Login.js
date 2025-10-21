import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaUser } from 'react-icons/fa';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { IoCaretBackOutline } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import { fetchCurrentUser, login } from '../../Redux/Reducers/authSlice';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import './Login.scss';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.loggedIn);
  const token = localStorage.getItem('token');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (token && isLoggedIn) {
      setTimeout(() => {
        navigate('/');
      }, 100);
    }
  }, [isLoggedIn, token, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login({ email, password }))
      .then(() => {
        dispatch(fetchCurrentUser());
      });
  };

  return (
    <section>
    <section className="login-section">
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <p>
          New here?
          {' '}
          <Link to="/register" className="sign-up-link">
            Sign Up
          </Link>
        </p>

        <div className="form-group">
          <span>Email Address </span>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div><br />

        <div className="form-group">
          <span>Password </span>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
        </div>
        <a href="javascript:void(0)" className="forgot">
          Forget password?
        </a>
        <button class="login100-form-btn">
          Login
        </button>
        <div className='social-link'>
          <Link to="javascript:void(0)" className="fb">
            <FaFacebook size={20} />
          </Link>
          <Link to="javascript:void(0)" className="google">
            <FaTwitter size={20} />
          </Link>
          <Link to="javascript:void(0)" className="twiter">
            <FaInstagram size={20} />
          </Link>
        </div>
      </form>
    </section>
    <div className='gr__circle__top'></div>
    <div className='gr__circle__bottom'></div>
    </section>
  );
};

export default Login;
