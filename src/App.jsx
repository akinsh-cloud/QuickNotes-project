import React from 'react'
import NotesGrid from './components/NotesGrid'
import AddNoteForm from './components/AddNoteForm'
import { useState } from 'react'

export default function App() {
  const [notes, setNotes] = useState([]);

  function handleAddNote(newNote) {
  setNotes([...notes, newNote]);
}

function DeleteNote(id) {
  const updatedNotes = notes.filter((note, idx) => idx !== id);
  setNotes(updatedNotes);
};


    
  return (
    <div>
      <AddNoteForm onAddNote={handleAddNote}/>
      <NotesGrid notes = {notes} onDeleteNote={DeleteNote}/>
      

    </div>
  )
}
