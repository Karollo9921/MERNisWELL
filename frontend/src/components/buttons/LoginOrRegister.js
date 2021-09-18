// import libs 
import { Link } from 'react-router-dom';

// creating component with buttons 
function LoginOrRegister() {
  return (
    <div>
      <Link to="/login" className="login-register">Login</Link>
      <Link to="/register" className="btn-home login-register">Register</Link>
    </div>
  );
};

export default LoginOrRegister;