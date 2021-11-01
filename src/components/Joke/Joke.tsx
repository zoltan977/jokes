import "./Joke.css";
import { useEffect, useState, useContext } from "react";
import AppContext from "../../AppContext/AppContext";
import httpClient from "axios";

const Joke = () => {
  const [currentJoke, setCurrentJoke] = useState("");
  const { selectedCategory: category } = useContext(AppContext);

  const getRandomJoke = async () => {
    try {
      const response = await httpClient.get(
        `https://api.chucknorris.io/jokes/random?category=${category}`
      );
      setCurrentJoke(response.data.value);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRandomJoke();
  }, [category]);

  return (
    <div className="Joke">
      <span>{currentJoke}</span>
    </div>
  );
};

export default Joke;
