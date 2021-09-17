import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function Register(props) {
  const [ name, setName ] = useState('');
  const [ surname, setSurname ] = useState('');
  const [ dateOfBirth, setDateOfBirth ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ confirmPassword, setConfirmPassword ] = useState('');

  async function submitRegister(e) {
    e.preventDefault();
    try {
      console.log('Am I here?');
      const responseFromServer = await axios.post('http://localhost:5000/register', {
        name: name,
        surname: surname,
        dateOfBirth: dateOfBirth,
        password: password,
        password2: confirmPassword
      }, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });

      console.log('Am I here?');

      if (responseFromServer.status === 201) {
        console.log(responseFromServer.data.message);
      } else {
        console.log(responseFromServer.data.message);
      }

    } catch (error) {
      console.log(error.response.data.message);
    }
  }

    return (
      <div>
        <div>
          <p></p>
        </div>
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
          <label>Confirm Password: </label>
          <input onChange={(e) => setConfirmPassword(e.target.value)} type="password" />
        </div>
        <div>
          <div>
            <p>Have an account? <span onClick={props.renderLogin}>Login</span></p>
          </div>
          <button onClick={(e) => submitRegister(e)}>Register</button>
        </div>
      </div>
    )
}

export default Register;