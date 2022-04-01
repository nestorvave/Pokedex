import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Pokemon from "./components/Pokemon";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);
  const [pokeType, setPokeType] = useState("");

  useEffect(() => {
    const list = async () => {
      const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
      const resp = await data.json();

      if (resp.results.length) {
        setPokemons(resp.results);
      }
    };
    list();

    const typesList = async () => {
      const data = await fetch("https://pokeapi.co/api/v2/type?limit=3");
      const resp = await data.json();

      if (resp.results.length) {
        setTypes(resp.results);
      }
    };
    typesList();
  }, []);

  useEffect(() => {
    if (pokeType) {
      const typesList = async () => {
        const data = await fetch(`https://pokeapi.co/api/v2/type/${pokeType}`);
        const resp = await data.json();
        console.log(resp)
        // if (resp.results.length) {
        //   setTypes(resp.results);
        // }
        const pokeTypes = resp.pokemon.map( item =>{

          const {pokemon: {name, url}} =item

          return {name, url}
        })
        setPokemons(pokeTypes)

      };
      typesList();
      
    }
  
    
  }, [pokeType])
  

  return (
    <BrowserRouter>
    <>
        <header>
          {
            types.map( type => <button  onClick={()=>setPokeType(type.name) } type="button" key={type.name} > {type.name} </button> )
          }
        </header>
      <main className="container">
        <nav>
          {pokemons.map((pokemon) => {
            return (
              <Link key={pokemon.name} to={`/${pokemon.name}`}>
                {pokemon.name}
              </Link>
            );
          })}
        </nav>

        <article>
          <Switch>
            {pokemons.map((pokemon) => {
              return (
                <Route
                key={`r_${pokemon.name}`}
                exact
                path={`/${pokemon.name}`}
                >
                  <Pokemon name={pokemon.name} />
                </Route>
              );
            })}
          </Switch>
        </article>
      </main>
            </>
    </BrowserRouter>
  );
}

export default App;
