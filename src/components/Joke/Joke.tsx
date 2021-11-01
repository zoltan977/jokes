import "./Joke.css";
import { useEffect, useState, useContext } from "react";
import AppContext, { IAppContext } from "../../AppContext/AppContext";
import httpClient from "axios";

const Joke = () => {
  const [currentJoke, setCurrentJoke] = useState<string>("");
  const { selectedCategory: category } = useContext<IAppContext>(AppContext);
  const [error, setError] = useState("");

  const getRandomJoke = async () => {
    try {
      setError("");
      const response = await httpClient.get(
        `https://api.chucknorris.io/jokes/random?category=${category}`
      );
      setCurrentJoke(response.data.value);
    } catch (error: any) {
      console.log(error);

      const err = error?.response?.data?.error;
      const msg = error?.response?.data?.message;

      if (err) setError(`${err}: ${msg}`);
    }
  };

  useEffect(() => {
    getRandomJoke();
  }, [category]);

  return (
    <div className="Joke">
      {error && (
        <div className="error" onClick={(e) => setError("")}>
          {error}
        </div>
      )}
      <span>{currentJoke}</span>
    </div>
  );
};

export default Joke;
