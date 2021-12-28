import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  // const s1 = {
  //     "name": "Rohit",
  //     "class": "5b"
  // }
  // const [state, setState] = useState(s1);
  // const update = () =>{
  //     setTimeout(() => {
  //         setState({
  //             "name": "Rahul",
  //             "class": "3b"
  //         })
  //     }, 2000);
  // }

  const host = "http://localhost:5000"

  const noteInitial = []

  const [notes, setNotes] = useState(noteInitial)


  // Get all Notes
  const getNotes = async () => {
    // API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.

      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem("token")
      },
    });
    const json = await response.json()
    console.log(json)
    setNotes(json)
  }
  // Add a Note
  const addNote = async (title, description, tag) => {
    //TODO: API Call
    // API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.

      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem("token")
      },
      body: JSON.stringify({ title, description, tag })
    });
    const note = await response.json();
    setNotes(notes.concat(note))
    // console.log(json)

    // console.log("Add a new note is successful")
    // const note = (json);
  }

  // Delete a Note
  const deleteNote = async (id) => {
    //TODO: API Call
     // API Call
     const response = await fetch(`${host}/api/notes/deletenote/${id}`, {  
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.

      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem("token")
      },
    });
    const json = await response.json();
    console.log(json)


    console.log("Deleting a note with id" + id);
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }


  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.

      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem("token")
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = await response.json();
    console.log(json)

    let newNotes = JSON.parse(JSON.stringify(notes))

    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  }


  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}


export default NoteState;
