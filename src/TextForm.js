import React, {useState} from "react";    // useState is a hook
import "./TextForm.css"

export default function TextForm(props) {

  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  const changetoUpper = () => {
    let strUpper = text.toUpperCase();
    setText(strUpper);
  }

  const changetoLower = () => {
    let strLower = text.toLowerCase();
    setText(strLower);
  }

  const removeExtraSpace = () => {
    let content = text.split(/[ ]+/);
    setText(content.join(" "));
  }

  const clearText = () => {
    setText("");
  }

  const copyText = () => {
    var content = document.querySelector("#myBox");
    content.select();
    navigator.clipboard.writeText(content.value);
  }

  return (
    <>
      <div className="container">
          <div className="form-group">
            <h1 className="text-center mt-4" style={{color:props.mode === 'light'?'black':'white'}}>Enter the Text Here</h1>
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'light'?'dark':'light'}} id="myBox" rows="10"></textarea>
          </div>
          <div className="container" id="options">
          <button className="btn btn-primary" onClick={changetoUpper}>Upper Case</button>
          <button className="btn btn-primary" onClick={changetoLower}>Lower Case</button>
          <button className="btn btn-primary" onClick={removeExtraSpace}>Remove Extra Space</button>
          <button className="btn btn-primary" onClick={clearText}>Clear Text</button>
          <button className="btn btn-primary" onClick={copyText}>Copy Text</button>
          </div>
      </div>

      <div className="container my-3" style={{color:props.mode === 'light'?'black':'white'}}>
        <h3>Your Text Summary</h3>
        <p>Characters = {text.length}</p>
        <p>Words = {text.trim().split(" ").length}</p>
        <p>Avg. Reading Time = {0.008 * text.trim().split(" ").length} Mins.</p>

        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
