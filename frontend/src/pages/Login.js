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
      const responseFromServer = await axios.post('https://mern-is-well.herokuapp.com/login', {
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
      <div className="container-login-register">
        <div className="container-form">
          <p id="error-message"></p>
          <div>
            <label>Name: </label>
            <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Name"/>
          </div>
          <div>
            <label>Surname: </label>
            <input onChange={(e) => setSurname(e.target.value)} type="text" placeholder="Surname" />
          </div>
          <div>
            <label>Date Of Birth: </label>
            <input onChange={(e) => setDateOfBirth(e.target.value)} type="date" placeholder="Date Of Birth" />
          </div>
          <div>
            <label>Password: </label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
          </div>
          <div className="buttons">
            <div>
              <p>Don't have an account? <Link to="/register" className="btn login-register">Register</Link></p>
            </div>
            <div className="button">
              <button onClick={(e) => submitLogin(e)}>Submit Login</button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Login;