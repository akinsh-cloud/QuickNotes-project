import React from 'react'
import { useState } from 'react';

export default function NotesGrid(){

  const [notes, setNotes] = useState([
 { title: "My first note", tag: "college", description: "Chapters to study" },
 { title: "Project idea", tag: "coding", description: "This section includes the necessary links to Tailwind CSS (for utility classes) and Lucide Icons (for professional symbols), as well as the custom CSS to define the color scheme, fonts, and the unique gauge component.Step 3: Main HTML Structure (Form and Result Views)This is the body of the application, containing the main container, the input form (prediction-form), the results dashboard (prediction-result), and the required medical disclaimer in the footer.Step 4: JavaScript Logic (<script> section)This script handles the form data submission, communicates with your deployed model, calculates the risk score, and dynamically updates the result view with the appropriate colors and messages.Step 5: Save and RunSave the file and open it in your web browser. You now have the complete, professional website! This approach ensures that everything you need is contained within that single, portable HTML file.Let me know if you run into any issues or want to add a feature, like input validation or detailed feature descriptions!" },
 
]);

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
            backgroundColor: "#597899ff",
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
        </div>
      ))}
    </div>
  
  
  )
  }
