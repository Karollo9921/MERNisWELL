// import libs 
import { useState } from 'react';
import axios from 'axios';

//import components
import Logout from './buttons/Logout';
import LoginOrRegister from './buttons/LoginOrRegister';

// creating Navbar component 
function NavbarAndGreeting() {

  // we want to know which buttons display on the screen 
  const [ isLoggedIn, setisLoggedIn ] = useState(false);
  const [ userName, setUserName ] = useState('');

  // we GET data from server if User is Logged In 
  async function getIsLoggedIn() {
    try {
      const responseFromServer = await axios.get('https://mern-is-well.herokuapp.com/api/home', {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });

      console.log(responseFromServer);
      // if User is Logged In we set isLoggedIn variable to true and userName variable to User's name
      if (responseFromServer.data.isLoggedIn) { 
        setisLoggedIn(true)
        setUserName(responseFromServer.data.user.name)
      };

    } catch (error) {
      console.log(error);
    }
  };

  // we call a function 
  getIsLoggedIn();

  return (
    <div className="container">
      <div>
        <nav className="navbar">
          { isLoggedIn ? <Logout /> : <LoginOrRegister /> }
        </nav>
      </div>
      { isLoggedIn ? <h1>Hello {userName}! You are logged in !</h1> : null }
    </div>
  );
};

export default NavbarAndGreeting;