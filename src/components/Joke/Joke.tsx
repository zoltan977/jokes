import "./Joke.css";
import { useEffect, useState, useContext } from "react";
import AppContext, { IAppContext } from "../../AppContext/AppContext";
import getApiData from "../../utils/getApiData";

const Joke = () => {
  const [currentJoke, setCurrentJoke] = useState<string>("");
  const { selectedCategory: category, setError } =
    useContext<IAppContext>(AppContext);

  useEffect(() => {
    getApiData(`/random?category=${category}`, setCurrentJoke, setError);
  }, [category]);

  return (
    <div className="Joke">
      <h2>joke</h2>
      <span>{currentJoke}</span>
    </div>
  );
};

export default Joke;
