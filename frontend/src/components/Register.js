import React from 'react';
import { useState } from 'react';

function Register() {
  const [ name, setName ] = useState('');
  const [ surname, setSurname ] = useState('');
  const [ dateOfBirth, setDateOfBirth ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ confirnPassword, setConfirnPassword ] = useState('');

    return (
      <div>
        <div>
          <label>Name: </label>
          <input onChange={(e) => setName(e.target.value)} type="text" />
        </div>
        <div>
          <label>Surname: </label>
          <input onChange={(e) => setSurname(e.target.value)} type="text" />
        </div>
        <div>
          <label>Date Of Birth: </label>
          <input onChange={(e) => setDateOfBirth(e.target.value)} type="date" />
        </div>
        <div>
          <label>Password: </label>
          <input onChange={(e) => setPassword(e.target.value)} type="password" />
        </div>
        <div>
          <div>
            <p>Have an account? <span>Login</span></p>
          </div>
          <button>Register</button>
        </div>
      </div>
    )
}

export default Login;