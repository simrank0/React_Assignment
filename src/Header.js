import React from "react";
import fire from "./firebase"
import firebase from "firebase"

const Header = (props) =>{

    const {userId, text, response, setText} = props;

    const handleLogOut = () =>{
        fire.auth().signOut();
      }

    const addNoteListener = () =>{
        var postData = {
          userId: userId,
          text: text,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        };
        if(text!==""){
          response.doc().set(postData)
          .then(() => {
            console.log("Added in DB");
            resetText();
          })
          .catch((error) => {
            console.log("Error writing document: ", error);
          });
        }
      }

      const resetText = ()=>{
        setText("");
      }

    return(
        <div>
            <nav className="navbar shadow justify-content-end p-3 rounded-bottom">
                <button className="btn shadow-light btn-light text-primary px-4" onClick={handleLogOut}>LOGOUT</button>
            </nav>
            <div class="container">
                <div className="row m-4 mx-auto">
                    <div className="col-2"/>
                    <input class="border rounded col-8" size="50px" value= {text} onChange={event => setText(event.target.value)}></input>
                    <div className="col-2 d-flex justify-content-start">
                    <button className="btn btn-dark col-sm-12 col-md-8 col-lg-6 mb-2 px-md-3" onClick={addNoteListener}>ADD+ </button>
                    <button className="btn btn-dark col-sm-12  col-md-8 col-lg-6 px-md-3" onClick={resetText}>CLEAR</button>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Header;