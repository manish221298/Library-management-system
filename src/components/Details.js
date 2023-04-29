import React, { useState } from 'react';
import BookStore from './BookStore';
// import './Details.css';

function Details() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
    // Email validation
    if (!/\S+@\S+\.\S+/.test(e.target.value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <form style={{marginBottom: '20px'}}>
        <label htmlFor="email" style={{marginRight: '10px'}}>Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email address"
          value={email}
          onChange={handleChange}
          style={{padding: '5px', borderRadius: '5px', border: '1px solid gray'}}
        />
        {emailError && <div className="error" style={{color: 'red', fontSize: '14px', marginTop: '5px'}}>{emailError}</div>}
      </form>
      <BookStore email={email} />
    </div>
  );
}

export default Details;
