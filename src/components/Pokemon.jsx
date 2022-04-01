import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Pokemon({ name }) {
    const[poke, setPoke]=useState({
        image:""
    })
    useEffect(() => {
        const request = async () => {
            const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            const resp = await data.json();
            const {  sprites } = resp
            setPoke({
                image:sprites.front_default
            })
        };
        if (name) {
            request();
        }
    }, [])
    const {  image } = poke

    return (
        <section>
            <Link to="/" >Volver</   Link>
            <div>
                <h1> {name} </h1>
                <img src={image} alt={name}  />
            </div>
        </section>
    )
}
