import React, { useEffect } from 'react'

export default function Pokemon({ name }) {

    useEffect(() => {
        const request = async () => {
            const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            const resp = await data.json();
            console.log(resp);
        };
        if (name) {
            request();
        }
    }, [])

    return (
        <div>Pokemon</div>
    )
}
