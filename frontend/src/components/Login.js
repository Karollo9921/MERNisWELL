import React from 'react';
import { useState } from 'react';
import axios from 'axios';


function Login(props) {
  const [ name, setName ] = useState('');
  const [ surname, setSurname ] = useState('');
  const [ dateOfBirth, setDateOfBirth ] = useState('');
  const [ password, setPassword ] = useState('');

  async function submitLogin() {
    try {
      const responseFromServer = await axios.post('http://localhost:5000/login', {
        name: name,
        surname: surname,
        dateOfBirth: dateOfBirth,
        password: password
      }, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });

      console.log(responseFromServer);

    } catch (error) {
      console.log(error.response.data.message);
    }
  }

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
          <p>Don't have an account? <span onClick={props.renderRegister}>Register</span></p>
          </div>
          <button onClick={() => submitLogin()}>Login</button>
        </div>
      </div>
    )
}

export default Login;