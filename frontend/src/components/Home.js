import React, { useState } from 'react';

// import components 
import Login from './Login';
import Register from './Register';


function Home() {
  const [ hasAccount, sethasAccount ] = useState(false);

  console.log(hasAccount);

  return (
    <div className="container">
      <div className="auth-window">
        {hasAccount && <Login renderRegister={() => sethasAccount(false)} /> || <Register renderLogin={() => sethasAccount(true)} />}
      </div>
    </div>
  );
}

export default Home;