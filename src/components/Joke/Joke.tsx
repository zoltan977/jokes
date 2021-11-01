import "./Joke.css";
import { useEffect, useState, useContext } from "react";
import AppContext, { IAppContext } from "../../AppContext/AppContext";
import { routes } from "../../utils/apiRoutes";

const Joke = () => {
  const [currentJoke, setCurrentJoke] = useState<{ value: string }>({
    value: "",
  });
  const { selectedCategory: category, getData } =
    useContext<IAppContext>(AppContext);

  useEffect(() => {
    getData(routes.categoryJokes(category), setCurrentJoke);
  }, [category]);// eslint-disable-line

  return (
    <div className="Joke" data-testid="Joke">
      <h2>joke</h2>
      <span data-testid="JokeSpan">{currentJoke.value}</span>
    </div>
  );
};

export default Joke;
