import React from 'react'
import { useState } from 'react';

export default function NotesGrid(){
  const [notes, setNotes] = useState([
 { title: "My first note", tag: "college", description: "Chapters to study" },
 { title: "Project idea", tag: "coding", description: "QuickNotes app" },
]);

  return (
    <div>
      {notes.map( (note,index) =>
        <div key={index} className="row">
  <div className="col-sm-6 mb-3 mb-sm-0">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text">{note.description}</p>
        <a href="#" className="btn btn-primary">Delete</a>
      </div>
    </div>
  </div>
  
</div>
      )}
    </div>
  )
}
