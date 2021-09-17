import React, { useState } from 'react';

// import components 
import Login from './Login';
import Register from './Register';


function Home() {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  return (
    <div className="container">
      <div className="auth-window">
        { isLoggedIn && <Register /> || <Login /> }
        
      </div>
    </div>
  );
}

export default Home;