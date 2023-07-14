import React,{useState} from 'react'


export default function TextForm(props) {
    
    const handleUpClick=()=>{
        //console.log("Uppercase was clicked"+text);
        var newText=text.toUpperCase();
        setText(newText);
        
    }
    const handleLoClick=()=>{
        //console.log("Uppercase was clicked"+text);
        var newText=text.toLowerCase();
        setText(newText);
       
    }

    const handleOnClick=(event)=>{
       // console.log("On clicked");
        setText(event.target.value);
    }

    const [text,setText]=useState("");
    
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        
        <textarea className= "form-control" value={text} onChange={handleOnClick} style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'black'}}id="myBox" rows="3"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Covert to uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Covert to lowercase</button>

    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}words and {text.length} chars</p>
        <p>{0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview "}</p>
    </div>
    </>
  )
}
