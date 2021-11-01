import "./Joke.css";
import { useEffect, useState, useContext } from "react";
import AppContext, { IAppContext } from "../../AppContext/AppContext";
import getApiData from "../../utils/getApiData";
import { routes } from "../../utils/apiRoutes";

const Joke = () => {
  const [currentJoke, setCurrentJoke] = useState<{ value: string }>({
    value: "",
  });
  const {
    selectedCategory: category,
    setError,
    setWaitingForTheServer,
  } = useContext<IAppContext>(AppContext);

  useEffect(() => {
    getApiData(
      routes.categoryJokes(category),
      setCurrentJoke,
      setError,
      setWaitingForTheServer
    );
  }, [category]);

  return (
    <div className="Joke" data-testid="Joke">
      <h2>joke</h2>
      <span data-testid="JokeSpan">{currentJoke.value}</span>
    </div>
  );
};

export default Joke;
