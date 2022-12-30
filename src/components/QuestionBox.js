import React, { useState } from "react";
import Result from "./Result";

function QuestionBox(props) {
  const [mode, setmode] = useState(true);
  const [active, setactive] = useState("Light");
  const [correctQue, setcorrectQue] = useState(0);
  const [queNo, setqueNo] = useState(0);
  const [highlight,setHighlight] = useState(false)
  // const [ansId, setansId] = useState(0);
  const toggleTheme = {
    backgroundColor: mode ? "grey" : "white",
    color: mode ? "white" : "black",
  };
  const toggleBoxTheme = {
    backgroundColor: mode ? "white" : "darkgrey",
    color: mode ? "black" : "white",
  };
  const changeMode = () => {
    if (mode) {
      setmode((mode) => !mode);
      setactive((active) => "Dark");
    } else {
      setmode((mode) => !mode);
      setactive((active) => "Light");
    }
  };
  const CheckAnswer = (id) => {
    if (props.Questions[queNo].options[id].isCorrect) {
      setcorrectQue(correctQue + 1);
    }
    console.log(props.Questions[queNo].options[id].isCorrect);
    setqueNo(queNo + 1);
  };
  const HighlightText = {
    color: highlight ? "red":"black"
  }
  const Highlight = () => {
    if(!highlight){
      setHighlight(highlight => !highlight)
    }
  }
  const RemHighlight = () => {
    if(highlight){
      setHighlight(highlight => !highlight)
    }
  }
  if (queNo < 5) {
    return (
      <div className="QuestionBox" style={toggleTheme}>
        <div className="Header">
          <h2>Kalvium</h2>
          <button className="modeToggle" onClick={changeMode}>
            {active}
          </button>
        </div>
        <div className="questionBox" style={toggleBoxTheme}>
          <h2>
            Question <span>{queNo + 1}</span> out of 5
          </h2>
          <h3 className="question" style={HighlightText}>{props.Questions[queNo].text}</h3>
          <div className="Options-box">
            <button className="Option-button" onClick={() => CheckAnswer(0)}>
              {props.Questions[queNo].options[0].text}
            </button>
            <button className="Option-button" onClick={() => CheckAnswer(1)}>
              {props.Questions[queNo].options[1].text}
            </button>
            <button className="Option-button" onClick={() => CheckAnswer(2)}>
              {props.Questions[queNo].options[2].text}
            </button>
            <button className="Option-button" onClick={() => CheckAnswer(3)}>
              {props.Questions[queNo].options[3].text}
            </button>
          </div>
          <div className="highlightButtons">
            <button onClick={Highlight}>Highlight</button>
            <button onClick={RemHighlight}>Remove highlight</button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="QuestionBox" style={toggleTheme}>
        <div className="Header">
          <h2>Kalvium</h2>
          <button className="modeToggle" onClick={changeMode}>
            {active}
          </button>
        </div>
        <Result Result = {correctQue}/>
      </div>
    );
  }
}
export default QuestionBox;
