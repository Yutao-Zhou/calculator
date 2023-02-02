import React from 'react';
import ReactDOM from 'react-dom/client';
export default function Tabs() {
    return (
        <div className="tab">
            <a href="https://yutao-zhou.github.io/JaveScript-Apps/index.html">
                <button>Count Down</button>
            </a>
            <a href="https://yutao-zhou.github.io/JaveScript-Apps/html/weather.html">
                <button>Weather</button>
            </a>
            <a href="https://yutao-zhou.github.io/JaveScript-Apps/html/todo.html">
                <button>Todo</button>
            </a>
            <a href="https://yutao-zhou.github.io/calculator/">
                <button>Calculator</button>
            </a>
            <a href="https://yutao-zhou.github.io/JaveScript-Apps/html/about.html">
                <button>About</button>
            </a>
        </div>
  );
}