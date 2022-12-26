import React, {useState} from 'react'

export default function TextForm(props) {
  // function for uppercase 
  const handleUpClick = () => {
    // console.log("uppercase was clicked  " + text);
    let newText = text.toUpperCase();
    // setText("you have clicked on handleUpClick");
    setText(newText);
  }

  // function for lowercase 

  const handleloClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  // function for clear text 

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
  }

  // function for inverse text 
  const handleInversClick = (event) => {
    /* Convert string to array*/
    let strArr = text.split("");
    /* Reverse array*/
    strArr = strArr.reverse();
    /* Convert array to string*/
    let newText = strArr.join("");
    setText(newText);
  };

  // function work as placeholder 
  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  // handle copy text 
  const handleCopy = () =>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  // handle extra spaces 

  const handleExtraSpace = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const [text, setText] = useState("enter text here");
  // text = ("new text"); wrong way to change state
  // setText = ("new text"); correct way to change state
  return (
    <>
      <div className='my-3'>
        <div className='container' style={{color : props.mode === 'dark'? 'white': 'black'}}>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'dark'? 'grey': 'white'}} id="myBox" rows="9"></textarea>
            </div>
            <button type="button" onClick={handleUpClick} className="btn btn-primary">Convert to Uppercase</button>
            <button type="button" onClick={handleloClick} className="btn btn-primary ms-3">Convert to Lowercase</button>
            <button type="button" onClick={handleClearClick} className="btn btn-primary ms-3">clear text</button>
            <button type="button" onClick={handleInversClick} className="btn btn-primary ms-3">inverse case</button>
            <button type="button" onClick={handleCopy} className="btn btn-primary ms-3">copy text</button>
            <button type="button" onClick={handleExtraSpace} className="btn btn-primary ms-3">Remove Extra space</button>
        </div>
      </div>
      <div className="container" style={{color : props.mode === 'dark'? 'white': 'black'}}>
        <h1>your text summery</h1>
        <p>{text.split(" ").length} words, {text.length} charecters</p>
        <p>we read this in { 0.008 * text.split(" ").length}     minitus</p>
        <h2>preview</h2>
        <p>{text}</p>
      </div>
    </>
    
    
  )
}
