import React, { useState, useEffect} from "react";
import fire from "./firebase"
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from "./user"
import AddNotes from "./addNotes"
import Header from "./Header"

const App = () => {
  const response = fire.firestore().collection("userNotes");
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [notes, setNotes] = useState([]);
  const userId = user? user.uid : null;
  const [text, setText] =  useState("");

  

  const getNotes = () => {
      response.onSnapshot((querySnapshot)=>{
        setNotes(
        querySnapshot.docs.map((doc)=>(
          {
          id: doc.id,
          text: doc.data().text,
          uId: doc.data().userId 
        }))
      )
    })
  }

  const authListener = () => {
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        setUser(user);
      }else{
        setUser("");
      }
    });
  };


//
  useEffect(()=>{
    authListener();
    getNotes();
  },[])


  return(
      <div className="App">
        {user&&notes ? (
        <div>
            <Header
            userId = {userId}
            text = {text} 
            response = {response}
            setText = {setText}/>  
            <AddNotes notes={notes} response={response} userId={userId}/> </div>
          ) : (
            <SignIn 
            email = {email}
            password = {password}
            setEmail = {setEmail}
            setPassword = {setPassword}
            error = {error}
            setError = {setError}/>
          )}
      </div>
  );
};

export default App;