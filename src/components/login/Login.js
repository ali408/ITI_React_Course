import { useState } from "react";
import "./login.css";
function Login() {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="login">
      <div className="login-box">
        <div className="box">
          <label htmlFor="">Email Address</label>
          <input type="email" />
        </div>
        <div className="box">
          <span onClick={() => setShowPass((s) => !s)}>👁</span>
          <label htmlFor="">Password</label>
          <input type={showPass ? "password" : "text"} />
        </div>
        <button className="btn btn-primary w-100 mt-3">Login</button>
      </div>
    </div>
  );
}

export default Login;
