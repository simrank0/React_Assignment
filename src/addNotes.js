import React from "react"
import {TrashIcon} from '@primer/octicons-react'
import fire from "./firebase"
import "./App.css"
const AddNotes = (props) =>{
    let {notes, response, userId} = props;
    notes = notes.filter((note)=>note.uId===userId);
    const deleteTask = (id)=>{
        response.doc(id).delete();
    }
    return (
        <section>
            <div className="notes pt-3">
                <div className="container-fluid">
                    <ol>
                    {notes.map((blog)=>(
                        <li class="card mx-auto col-7 mb-5 rounded border-bottom">
                            <div class="card-body">
                                <div className="row">
                                    <p key={blog.id} className=" col-11 mb-0">{blog.text}</p>
                                    <button className="btn col-xs-3 btn-sm col-sm-1 trashicon m-auto btn-st"
                                    onClick={event=>deleteTask(blog.id)}
                                    ><i> <TrashIcon/></i></button>
                                </div>
                            </div>
                        </li>
                    ))}
                    </ol>
                </div>
            </div>
        </section>
    );
};

export default AddNotes;
