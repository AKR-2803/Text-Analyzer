import { useState } from "react";
import "./App.css";
import "./components/TextForm.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from './components/About';


function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#122654";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };


const toggleGreenMode = () => {
  let green1 = document.querySelector('#button1');
  let green2 = document.querySelector('#button2');
  let green3 = document.querySelector('#button3');
  let green4 = document.querySelector('#copyButton');
  let green5 = document.querySelector('#button5');
  let green6 = document.querySelector('#myBox');
  let green7 = document.querySelector('#button6');
  let green10 = document.querySelector('#button7');
  let green8 = document.querySelector('#words');
  let green9 = document.querySelector('#characters');
  // console.log(green6);

  if (mode === "light") {
    setMode("dark");
    document.body.style.backgroundColor = "rgb(2, 52, 25)";
    green1.classList.add('btnGreen');
    green2.classList.add('btnGreen');
    green3.classList.add('btnGreen');
    green4.classList.add('btnGreen');
    green5.classList.add('btnGreen');
    // green6.classList.add('btnGreen');
    green7.classList.add('btnGreen');
    green8.classList.add('btnGreen');
    green9.classList.add('btnGreen');
    green10.classList.add('btnGreen');
  } else {
    setMode("light");
    document.body.style.backgroundColor = "white";
    document.head.style.backgroundColor = "white";
    green1.classList.remove('btnGreen');
    green2.classList.remove('btnGreen');
    green3.classList.remove('btnGreen');
    green4.classList.remove('btnGreen');
    green5.classList.remove('btnGreen');
    // green6.classList.remove('btnGreen');
    green7.classList.remove('btnGreen');
    green8.classList.remove('btnGreen');
    green9.classList.remove('btnGreen');
    green10.classList.remove('btnGreen');
  }
};

  return (
    // const [darkMode, setDarkMode] = useState(false);

    <div>
      <Navbar
        title="TextAnalyzer"
        // aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
        toggleGreenMode={toggleGreenMode}
      />
      <div className="container my-5">
        <TextForm mode={mode} heading="Text Analyzer" toggleGreenMode={toggleGreenMode} />
        {/* <About/> */}
      </div>
    </div>
  );
}

export default App;
