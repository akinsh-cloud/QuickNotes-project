import React from 'react'
import { useState } from 'react'

export default function AddNoteForm() {
  
   const [notes, setNotes] = useState({
    title:"",
    tag:"",
    description:""});


    function handleChange(e) {
    setNotes({
      ...notes,
      [e.target.name]: e.target.value,
    });
  }


   function handleSubmit(e){
    e.preventDefault();
    if(!notes.title || !notes.tag || !notes.description){
      alert("Please fill all the fields");
      return;
    }
    
     setNotes({
      title: "",
      tag: "",
      description: "",
    });
    console.log(notes);
   }


    const {title,tag,description}=notes;

  return (
    <div >
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type='text'placeholder='Enter Title' name='title' value={title} onChange={handleChange}/>
        <label>Tag</label>
        <input type='text' placeholder='Enter Tag' name='tag' value={tag} onChange={handleChange}/>
        <label>Description</label>
        <textarea placeholder='Enter description' name='description' value={description} onChange={handleChange}></textarea>
        <button type='submit'>Add Note</button>
      </form>
    </div>
  )
}
