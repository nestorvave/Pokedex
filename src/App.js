import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import './App.css'

function App() {
  const [poke, setPoke] = useState(null);

  useEffect;
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <BrowserRouter>
      <main className="container" >
        <nav></nav>
        <article></article>
      </main>
    </BrowserRouter>
  );
}

export default App;
