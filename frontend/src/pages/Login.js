// import libs 
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

// creating a Login page 
function Login() {
  // declaring variables where will be user data to POST 
  const [ name, setName ] = useState('');
  const [ surname, setSurname ] = useState('');
  const [ dateOfBirth, setDateOfBirth ] = useState('');
  const [ password, setPassword ] = useState('');

  // we submit login data 
  async function submitLogin(e) {
    e.preventDefault(e);
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

      // after successful login we want to redirect to root page 
      if (responseFromServer.status === 200) {
        window.location.href = '/'
      };

      // if we catch an error we want to know what is a problem and display it in paragraph for 7 seconds 
    } catch (error) {
      document.getElementById('error-message').style.display = 'block';
      document.getElementById('error-message').style.color = 'red';
      document.getElementById('error-message').textContent = error.response.data.message;
      
      setTimeout(() => {
        document.getElementById('error-message').textContent = '';
        document.getElementById('error-message').style.display = 'none';
      }, 7000);
    }
  }

    return (
      <div>
        <p id="error-message"></p>
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
          <p>Don't have an account? <Link to="/register" className="btn login-register">Register</Link></p>
          </div>
          <button onClick={(e) => submitLogin(e)}>Login</button>
        </div>
      </div>
    )
}

export default Login;