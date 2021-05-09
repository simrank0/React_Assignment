import React, {useState} from "react";
import fire from "./firebase"

const SignIn = (props) => {
  
  const {email, password, setEmail, setPassword, error, setError} = props;
  let field1 = "DON'T HAVE AN ACCOUNT? SIGNUP"
  let field2 = "Have an account? LOGIN";

  const [state, setstate] = useState(false); 

  const changeText = ()=>{
    state?setstate(false):setstate(true);
  }

  const handleReq = () =>{
    if(state)
    fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(err=>{
      setError(err.message);
    })
    else fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(err=>{
      setError(err.message);
    })
    setError("");
  }

  return (
    <div className="main">
      <div className="container form-control border pt-0 px-0 rounded">
        <div className="bg-primary text-white p-2 rounded-top">{state?"LOGIN":"SIGNUP"}</div>
        <label className=" p-4 col-2">Email: </label>
        <input
        type = "text"
        className="border rounded col-8 ml-2" size="20px" 
        required
        value={email}
        onChange={(e)=>{setEmail(e.target.value)}}/>
        <br/>
        <label className="col-2">Password:</label>
        <input
        type = "password"
        required
        class="border rounded col-8" size="20px" 
        value={password}
        onChange={(e)=>{setPassword(e.target.value)}}/>
        <p className="errorMsg">{error}</p>
        <div className="btnContainer">
          <button id="field" className=" btn btn-st my-2" onClick={handleReq}>{state?"LOGIN":"SIGNUP"}</button>
        </div>
        <div className="btnContainer">
          <button id="field2" className=" btn btn-st" onClick={changeText}>{state?field1: field2}</button>
        </div>
      </div>
    </div>
  )
  
};
export default SignIn;