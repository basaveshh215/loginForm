import { FaUser,FaLock } from "react-icons/fa";
import React from "react";
import "./Login.css"

function Login() {
  return (
    <>
      <div 
className="wrapper">
        <form action="">
          <h1>LOGIN</h1>
          <div className="input-one">
          <FaUser />
            <input type="text" placeholder="Username"/>
            
          </div>
          <div className="input-two">
          <FaLock />
            <input type="password" placeholder="Password"/>
          </div>
          <div className="input-three">
          <input type="checkbox"/>
            <label htmlFor="">Remember me</label>
        
            <a href="#"> Forgot password</a>
          </div>
          <button type="submit"> LOGIN</button>
          <div className="input-four">
           <p>Dont't have a account....<a href="#">Register</a></p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;