import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/Kanbas/account");
  };
  return (
    <div className="p-5">
      <h1>Sign In</h1>
      <div className="p-2"> 
        <input className="form-control w-50" placeholder="Username" value={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
      </div>
      <div className="p-2">
      <input className="form-control w-50" placeholder="Password" value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
      </div>   
      <button className="btn btn-primary" onClick={signin}> Sign in </button>
    </div>
  );
}
export default Signin;