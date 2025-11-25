import React from 'react'
import { useState } from 'react';

export default function NotesGrid({ notes, onDeleteNote }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "16px",
        padding: "20px",
      }}
    >
      {notes.map((note, idx) => (
        <div
          key={idx}
          style={{
            backgroundColor: "#a7a5a5ff",
            color: "white",
            borderRadius: "10px",
            padding: "16px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
          }}
        >
          {/* Title + Tag row */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <h3 style={{ margin: 0, fontSize: "20px", fontWeight: "600" }}>
              {note.title}
            </h3>
        
            <span
              style={{
                backgroundColor: "rgba(255,255,255,0.2)",
                padding: "4px 10px",
                borderRadius: "6px",
                fontSize: "12px",
                fontWeight: "500",
              }}
            >
              {note.tag}
            </span>
          </div>

          {/* Description */}
          <p style={{ margin: 0, fontSize: "15px", lineHeight: "1.4" }}>
            {note.description}
          </p>

          <button style={{
            marginTop: "15px",
            padding: "8px 12px",
            borderRadius: "6px",
            border: "none",
            backgroundColor: "#ff4d4d",
            color: "white",
            cursor: "pointer",
          }} onClick={() => onDeleteNote(idx)}>Delete</button>

          <button style={{
            marginTop: "15px",
            marginLeft: "10px",
            padding: "8px 12px",
            borderRadius: "6px",
            border: "none",
            backgroundColor: "#4CAF50",
            color: "white",
            cursor: "pointer",
          }} onClick={()=> edit}>Edit</button>  

        </div>
      ))}
    </div>
  
  
  )
  }
