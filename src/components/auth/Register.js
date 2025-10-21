import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../Redux/Reducers/regSlice';
import { useNavigate } from 'react-router-dom';
import './Register.scss';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [full_name, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { status, error } = useSelector((state) => state.register) || {};
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp({
      email,
      full_name,
      password,
    }));
    setIsSignedUp(true);
  };

  useEffect(() => {
    if (isSignedUp) {
      setTimeout(() => {
        navigate('/login');
        setIsSignedUp(false);
      }, 100);
    }
  }, [isSignedUp, navigate]);

  const renderMessage = () => {
    if (status === 'loading') {
      return <p>Loading...</p>;
    }

    if (status === 'failed') {
      return (
        <p>
          There was an error:
          {error}
        </p>
      );
    }

    if (status === 'succeeded') {
      return <p>Sign up successful!</p>;
    }
    return null;
  };

  return (
    <section className="register-section">
    <form onSubmit={handleSubmit} className='re-form'>
    <div className="register-photo">
      <div className="form-container">
        <div className="">
        <h2 className="text-heading">MAP YOUR DREAM</h2>
        <p className="paragraph">Revolutionizing design with generative Map your Dream empowers everyone to automate residential floorplans,3D renders.</p>
        <img src="/pic.png" alt="a picture" />
        </div>
        <form onSubmit={handleSubmit}>
          <h2 className="text-center"><strong>Create an account.</strong> </h2>
          <div className="form-group"><input className="form-control" type="email" name="email" placeholder="Email" /></div>
          <div className="form-group"><input className="form-control" type="password" name="password" placeholder="Password" /></div>
          <div className="form-group"><input className="form-control" type="password" name="password-repeat" placeholder="Password (repeat)" /></div>
          <div className="form-group">
            <div className="form-check">
              <label className="form-check-label">
                <input className="form-check-input" type="checkbox" />
                I agree to the license terms.
              </label>
            </div>
          </div>
          <button class="login100-form-btn">
          Signup
        </button>
          <a className="already" href="/login">You already have an account? Login here.</a>
        </form>
      </div>
    </div>
    </form>
    <div className='gr__circle__top'></div>
    <div className='gr__circle__bottom'></div>
    </section>
  );
};

export default Register;
