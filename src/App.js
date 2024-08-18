import { useState } from "react";
import "./App.css";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="app">
      <h2>Hello React</h2>
      <div className="btns">
        <button className={`${show && "active"}`} onClick={() => setShow(true)}>
          Login
        </button>
        <button
          className={`${!show && "active"}`}
          onClick={() => setShow(false)}
        >
          SignUp
        </button>
      </div>
      <div>{show ? <Login /> : <Register />}</div>
    </div>
  );
}

export default App;
