import { useContext, useState, useEffect } from "react";

import { MathContext, MathProvider } from "./context/MathContext";
import "./App.css";

import Header from "./components/Header";
import MathBody from "./components/MathBody";

function App() {
  return (
    <MathProvider>
      <div className="App">
        <Header />
        <MathBody />
      </div>
    </MathProvider>
  );
}

export default App;
