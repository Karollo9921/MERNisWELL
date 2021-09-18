// import lib 
import axios from "axios";

// creating component with logout button and its functionality
function Logout() {
  
  // we send a request to Server, session cookie will be destoy in MongoDB 
  async function submitLogout(e) {
    e.preventDefault();
    try {
      await axios.post('https://mern-is-well.herokuapp.com/logout', { }, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: 'same-origin'
      });

      // after Logout we want to go to root page 
      window.location.href = '/';

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={(e) => submitLogout(e)} className="btn-home login-register">
        Logout
      </button>
    </div>
  );
};

export default Logout;