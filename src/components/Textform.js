import React, {useState} from 'react';

export default function Textform(props) {
  const[text, setText] = useState('');

  const handleUpClick = () => {
    let newT = text.toUpperCase();
    setText(newT);
    props.showAlert("converted to uppercase", "success");
  }

  const handlelowClick = () => {
    let newT = text.toLocaleLowerCase();
    setText(newT);
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  return (
    <>
      <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>   
          <h1>{props.heading}</h1>
          <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', 
            color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
          <button className="btn btn-primary mx-2" onClick={handlelowClick}>Convert to lowercase</button>
      </div>
      <div className='container my-5' style={{color: props.mode==='dark'?'white':'black'}}>   
          <h1>Text summary</h1>
          <p> {text.split(" ").filter((element)=>{ return element.length !== 0 }).length} words and {text.length} characters</p>
          <p>{0.008 * text.split(" ").length} Minutes read</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:'Enter something to preview'}</p>
      </div>
    </>
  )
}
