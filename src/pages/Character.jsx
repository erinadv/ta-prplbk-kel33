import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DetailCharacter = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    // Function to fetch a default set of books
    const fetchCharDetail = async () => {
        try {
            const response = await fetch(
              `https://bobsburgers-api.herokuapp.com/characters/${id}`
            );
            const data = await response.json();
            setCharacter(data);
        } catch (error) {
            console.log(error);
        }
    };
    // Call the function when the component mounts
    fetchCharDetail();
}, [id]);

  return (
    <div>
      { character && (
      <div>
        <h1>{character.name}</h1>
        <img src={character.image} style={{ width: 100, height: 100 }} alt={character.name} />
        <p>{character.gender}</p>
        <p>{character.age}</p>
        <p>{character.voicedBy}</p>
      </div>
    )}
    </div>
      
    );
};

export default DetailCharacter;