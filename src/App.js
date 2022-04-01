import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import './App.css'

function App() {
  const [poke, setPoke] = useState(null);


  useEffect( () => {
    
      const request = async ()=>{
        const data = await fetch("https://pokeapi.co/api/v2/pokemon")
        const resp= await data.json()
        return resp
      }
      const result = request()
      
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
