import React from 'react'
import NotesGrid from './components/NotesGrid'
import AddNoteForm from './components/AddNoteForm'
import { useState } from 'react'

export default function App() {
  const [notes, setNotes] = useState([]);

  function handleAddNote(newNote) {
  setNotes([...notes, newNote]);
}

    
  return (
    <div>
      <AddNoteForm onAddNote={handleAddNote}/>
      <NotesGrid notes = {notes}/>
      

    </div>
  )
}
