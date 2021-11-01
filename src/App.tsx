import "./App.css";
import { useEffect, useState } from "react";
import CategoryList from "./components/CategoryList/CategoryList";
import Joke from "./components/Joke/Joke";
import AppContext from "./AppContext/AppContext";
import getApiData from "./utils/getApiData";
import { routes } from "./utils/apiRoutes";

const App = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    getApiData(routes.categories, setCategories, setError);
  }, []);

  return (
    <div className="App">
      {error && (
        <div className="error" onClick={(e) => setError("")}>
          {error}
        </div>
      )}

      <h1>Chuck Norris jokes</h1>
      <div className="CategoriesAndJoke">
        <AppContext.Provider
          value={{
            selectedCategory,
            setSelectedCategory,
            setError,
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
