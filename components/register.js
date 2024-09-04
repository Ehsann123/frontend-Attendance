import React, { useState } from 'react';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');

  const handleRegister = async () => {
    try {
      // Post data to the Flask API
      const response = await fetch('http://localhost:5000/register_user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus(`User registered successfully: ${result.message}`);
      } else {
        setStatus(`Error: ${result.message}`);
      }
    } catch (error) {
      setStatus('An error occurred. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Register User</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
      {status && <p>{status}</p>}
    </div>
  );
};

export default RegisterScreen;
