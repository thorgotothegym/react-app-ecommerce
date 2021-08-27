import React from 'react'
import "./App.css";
import { Header } from "./components/Header/Header";
import { BreadCrum } from "./components/BreadCrum/BreadCrum";

function App() {
  return (
    <div className="App">
      <Header />
      <BreadCrum />
    </div>
  );
}

export default App;