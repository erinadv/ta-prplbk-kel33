import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        // Function to fetch a default set of books
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'https://bobsburgers-api.herokuapp.com/characters'
                );
                const data = await response.json();
                setCharacters(data);
            } catch (error) {
                console.log(error);
            }
        };
        // Call the function when the component mounts
        fetchData();
    }, []);


    return (
        <div>
            <h1>Characters</h1>
            <ul>
                {characters.map((character) => (
                    <li key={character.id}>
                        <Link to={`/characters/${character.id}`}>{character.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;
