import React, { useState } from "react";

// default value of text is here ("Enter text here") text is variable here and setText is updated variable here

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("uppercase was clicked:  " + text);
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleLoClick = () => {
        // console.log("uppercase was clicked:  " + text);
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handleOnChange = (event) => {
        // console.log("On Change")
        setText(event.target.value)
    }
    const [text, setText] = useState("")
    // text = "new text" // Wrong way to change the state
    // setText = "new text"// Correct way to change the state
    return (
        <>
        <div className="container">
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label">textarea</label>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words  {text.length} charcters</p>
            <p>{(0.008*text.split(" ").length).toFixed(2)} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}