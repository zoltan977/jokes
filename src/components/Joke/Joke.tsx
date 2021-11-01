import './Joke.css';
import React, { useEffect, useState } from 'react';
import httpClient from 'axios';

interface IProps {
    category: string
}

const Joke: React.FC<IProps> = ({category}) => {
    const [currentJoke, setCurrentJoke] = useState("");

    const getRandomJoke = async () => {
        try {
            const response = await httpClient.get(`https://api.chucknorris.io/jokes/random?category=${category}`);
            setCurrentJoke(response.data.value)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getRandomJoke()
    }, [category])

    return (
        <div className="Joke">
            <span>{currentJoke}</span>
        </div>
    )
}

export default Joke;