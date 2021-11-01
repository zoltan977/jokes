import "./App.css";
import { useEffect, useState } from "react";
import CategoryList from "./components/CategoryList/CategoryList";
import Joke from "./components/Joke/Joke";
import AppContext from "./AppContext/AppContext";
import getApiData from "./utils/getApiData";
import { routes } from "./utils/apiRoutes";
import LoadingMask from "./components/LoadingMask/LoadingMask.component";

const App = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [waitingForTheServer, setWaitingForTheServer] = useState(false);

  useEffect(() => {
    getApiData(
      routes.categories,
      setCategories,
      setError,
      setWaitingForTheServer
    );
  }, []);

  return (
    <div className="App">
      {error && (
        <div
          data-testid="error"
          className="error"
          onClick={(e) => setError("")}
        >
          {error}
        </div>
      )}
      {waitingForTheServer && <LoadingMask />}

      <h1>Chuck Norris jokes</h1>
      <div className="CategoriesAndJoke" data-testid="CategoriesAndJoke">
        <AppContext.Provider
          value={{
            selectedCategory,
            setSelectedCategory,
            setError,
            setWaitingForTheServer,
          }}
        >
          <CategoryList categories={categories} />
          {selectedCategory && <Joke />}
        </AppContext.Provider>
      </div>
    </div>
  );
};

export default App;
