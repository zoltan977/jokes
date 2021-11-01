import "./Joke.css";
import { useEffect, useState, useContext } from "react";
import AppContext, { IAppContext } from "../../AppContext/AppContext";
import getApiData from "../../utils/getApiData";

const Joke = () => {
  const [currentJoke, setCurrentJoke] = useState<string>("");
  const { selectedCategory: category } = useContext<IAppContext>(AppContext);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    getApiData(`/random?category=${category}`, setCurrentJoke, setError);
  }, [category]);

  return (
    <div className="Joke">
      {error && (
        <div className="error" onClick={(e) => setError("")}>
          {error}
        </div>
      )}
      <h2>joke</h2>
      <span>{currentJoke}</span>
    </div>
  );
};

export default Joke;
