import React, { useState } from 'react'
import "./Textform.css"

export default function Texthtmlform(props) {
    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked" +  text);
        let newtext=text.toUpperCase()
        setText(newtext);
        props.showAlert("Converted to uppercase!","success")
    }
    const handleDownClick = ()=>{
        //console.log("Lowercase was clicked" +  text);
        let newtext=text.toLowerCase()
        setText(newtext);
        props.showAlert("Converted to lowercase!","success")
    }
    const handleClearClick = ()=>{
        //console.log("Lowercase was clicked" +  text);
        let newtext=("")
        setText(newtext);
        props.showAlert("Cleared Text!","success")
    }
    const handleExtraSpaces = ()=>{
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Removed Extra Spaces!","success")
    }
    const handleCopy = ()=>{
        var text=document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied To Clipboard!","success")
    }
    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value)
    }
    const [text,setText]=useState('');
    //settext("new text"); correct way to change the state
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h3>{props.heading}</h3>
        <div className="mb-3">
            <label htmlFor="exampleformControlTextarea1" className="form-label">Textarea</label>
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#3d3d3e':'white',color:props.mode==='dark'?'white':'black'}}id="mybox" rows="5"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Change to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleDownClick}>Change to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="conatiner my-2" style={{backgroundColor:props.mode==='dark'?'#3d3d3e':'white' ,color:props.mode==='dark'?'white':'black'}}>
        <h4>Summary</h4>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>   
        <h4>Preview</h4>
        <div className="mb-3">
            <label for="exampleformControlTextarea1" className="form-label"></label>
            <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#3d3d3e':'white',color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="mybox" rows="5"></textarea>
        </div>
        {/*<p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>*/}
    </div>
    </>
  )
}
