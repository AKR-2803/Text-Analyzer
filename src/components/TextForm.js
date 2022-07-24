import React, { useState } from 'react';

export default function TextForm(props) {

    const [text, setText] = useState(``);
    // setText("new text");

    //uppercase
    const handleUpClick = () => {
        // console.log("Uppercase was clicked!");
        let newText = text.toUpperCase();
        setText(newText);
    }

    //uppercase
    const handleLoClick = () => {
        // console.log("Lowercase was clicked!");
        let newText = text.toLowerCase();
        setText(newText);
    }

    //camelCase
    const handleTitleCase = () => {
        // console.log("Titlecase was clicked!");
        let newText = text.replace(/\b\w/g, l => l.toUpperCase());
        setText(newText);
    }

    //enables us to type in the textarea
    const handleOnChange = (event) => {
        console.log("OnChange was clicked!" + text);
        setText(event.target.value);
    }

    //clear text
    const handleClear = () => {
        let newText = "";
        setText(newText);
    }

    //copy text to clipboard
    const handleCopyClick = () => {
        let copyText = document.getElementById('copyButton');

        setTimeout(() => {
            copyText.innerHTML = `Copy`;
        }, 1500);

        copyText.innerHTML = `Copied!`;
        navigator.clipboard.writeText(text);

    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    // document.getElementById('inputQuery').addEventListener('change', function(){
    //     let inputText = document.getElementById('inputQuery').value;
    // })

    const handleSearch = () => {
        let inputText = document.getElementById('inputQuery').value;
        let count = 0;
        if(inputText !== "" && count == 0){
            let found = new RegExp(inputText, "g");
            if(found!==""){
                let foundReplace = text.replace(found,`<found>${inputText}</found>`);
                // console.log(foundReplace);
                setText(foundReplace);    

            }
            else{
                alert('Could not find');
            }
        
        }
        else{
            alert('Enter Something to Search');
        }

    }
        
    // let greenDiv =  document.getElementById('greenBtns');
    // green.addEventListener('click', function(){
    //     greenDiv.classList.add('btnGreen');
    // })
    // console.log(green);


    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? "white" : "#122654" }}>

                <h1>{props.heading}</h1>
                <div className="mb-3">
                    {/* <label for="myBox" className="form-label">Example textarea</label> */}
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#081038' : 'white', border: props.mode === 'dark' ? "2px solid white" : "2px solid #122654", color: props.mode === 'light' ? '#122654' : 'white' }} id="myBox" rows="8" placeholder='Enter text here'></textarea>
                </div>
                {/* convert top upper/lower case */}
                <div className="buttons" id="greenBtns">

                    <button disabled={text.length === 0} className="btn btn-primary my-1 btnG" id='button1' onClick={handleUpClick}>UPPERCASE</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-2  my-1 btnG" id='button2' onClick={handleLoClick}>lowercase</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1 btnG" id='button6' onClick={handleTitleCase}>Title Case</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-0.5 my-1 btnG" id='button3' onClick={handleClear}>Clear Text</button>
                    {/* copy to clipboard */}
                    {/* <button className="btn btn-primary mx-2" onClick={() => {navigator.clipboard.writeText(text)}}> */}
                    <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1 btnG" id="copyButton" onClick={handleCopyClick}>Copy</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-0.5 my-1 btnG" id='button5' onClick={handleExtraSpaces}>Clear Extra Spaces</button>
                    <div className="input-group my-3 mb-3 w-25">
                        <input id="inputQuery" type="text" className="form-control" placeholder="Search here" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button disabled={text.length === 0} className="btn btn-primary" type="submit" value="Submit" id='button7' onClick={handleSearch} >Search</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? "white" : "#122654" }}>

                <hr />
                <h3>Your Text Summary</h3><pre /><pre />
                <div>
                    <h5 className='margin'>
                        <span>Words : </span>
                        <div id="words" className='btn btn-primary numberCircle'> {text.split(/\b\S+\b/).length - 1} </div>
                        <span>Characters : </span>
                        <div id="characters" className='btn btn-primary numberCircle'>{text.length}</div>

                    </h5>
                </div>
                <hr />
                <h3>Preview</h3>
                <p style={{ fontStyle: text.length > 0 ? 'normal' : 'italic' }}>
                    {text.length > 0 ? text : "Nothing to preview :)"}
                </p>

            </div>
            <footer style={{ color: props.mode === 'dark' ? "white" : "#122654", textAlign: 'center' }}> © 2022 Aaryaveer Rajput</footer>
        </>
    );
}
