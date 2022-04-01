import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Pokemon from "./components/Pokemon";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const request = async () => {
      const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
      const resp = await data.json();

      if (resp.results.length) {
        setPokemons(resp.results);
      }
    };
    request();
  }, []);

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
