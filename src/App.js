import React from 'react';
import ReactDOM from 'react-dom/client';
export default function App() {
    const [currentState, setCurrent] = React.useState("0");
    const [previousState, setPrevious] = React.useState("");
    const operator = ["+", "-", "*", "/", "."]
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    function handleClick(event) {
            event.preventDefault();
            console.log(event.target.id)
            if (operator.includes(event.target.id) && operator.includes(currentState.slice(-1))) {
                setCurrent(currentState.slice(0, -1) + event.target.id);
            } else if (currentState === "0" && numbers.includes(event.target.id)){
                setCurrent(event.target.id);
            } else {
                switch(event.target.id) {
                    case "AC":
                        setPrevious("");
                        setCurrent("0");
                        break;
                    case "DEL":
                        const deleted = currentState === "0" ? currentState : currentState.slice(0, -1);
                        setCurrent(deleted);
                        break;
                    case "=":
                        if (!operator.includes(currentState.slice(-1)) && currentState.slice(-1) !== "="){
                            setPrevious(currentState + "=");
                            setCurrent(eval(currentState));
                        }
                        break;
                    default:
                        setCurrent(currentState + event.target.id);
                        break;
                }
            }
        }

    return (
        <div className="App">
            <div className="grid">
                <div className="display">
                    <div className="previous">{previousState}</div>
                    <div className="current">{currentState}</div>
                </div>
                    <button id="AC" className="spanTwo" onClick={handleClick}>AC</button>
                    <button id="DEL" className="operator" onClick={handleClick}>DEL</button>
                    <button id="+" className="operator" onClick={handleClick}>+</button>
                    <button id="1" onClick={handleClick}>1</button>
                    <button id="2" onClick={handleClick}>2</button>
                    <button id="3" onClick={handleClick}>3</button>
                    <button id="/" className="operator" onClick={handleClick}>/</button>
                    <button id="4" onClick={handleClick}>4</button>
                    <button id="5" onClick={handleClick}>5</button>
                    <button id="6" onClick={handleClick}>6</button>
                    <button id="*" className="operator" onClick={handleClick}>*</button>
                    <button id="7" onClick={handleClick}>7</button>
                    <button id="8" onClick={handleClick}>8</button>
                    <button id="9" onClick={handleClick}>9</button>
                    <button id="-" className="operator" onClick={handleClick}>-</button>
                    <button id="." onClick={handleClick}>.</button>
                    <button id="0" onClick={handleClick}>0</button>
                    <button id="=" className="spanTwo" onClick={handleClick}>=</button>
            </div>
        </div>
  );
}