import React, { useState } from 'react';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    console.log('Registering:', email, password);
  };

  return (
    <div className="p-3">
      <h2>Register</h2>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input value={password} type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;