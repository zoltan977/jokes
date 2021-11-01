import "./App.css";
import { useEffect, useState } from "react";
import CategoryList from "./components/CategoryList/CategoryList";
import httpClient from "axios";
import Joke from "./components/Joke/Joke";
import AppContext from "./AppContext/AppContext";

const App = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [error, setError] = useState("");

  const getCategories = async () => {
    try {
      setError("");
      const response = await httpClient.get(
        "https://api.chucknorris.io/jokes/categories"
      );
      setCategories(response.data);
    } catch (error: any) {
      console.log(error);

      const err = error?.response?.data?.error;
      const msg = error?.response?.data?.message;

      if (err) setError(`${err}: ${msg}`);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="App">
      {error && (
        <div className="error" onClick={(e) => setError("")}>
          {error}
        </div>
      )}

      <h1>Chuck Norris jokes</h1>
      <div className="categories">
        <AppContext.Provider
          value={{
            selectedCategory,
            setSelectedCategory,
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
