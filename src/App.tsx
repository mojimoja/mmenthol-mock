import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BG_COLORS,
  GlobalActions,
  useGlobalSlice,
} from "./store/globalSlice/globalSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectSelectedBgColor } from "./store/globalSlice/globalSelector";

function App() {
  useGlobalSlice();
  const bgColor = useSelector(selectSelectedBgColor);
  const dispatch = useDispatch();
  const changeBgColor = () => {
    bgColor === BG_COLORS.RED
      ? dispatch(GlobalActions.changeBgColor(BG_COLORS.GREEN))
      : dispatch(GlobalActions.changeBgColor(BG_COLORS.RED));
  };
  return (
    <div className="App">
      <header
        className="App-header"
        style={{
          backgroundColor: bgColor === BG_COLORS.RED ? "red" : "green",
        }}
      >
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={changeBgColor}>Change background color</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
