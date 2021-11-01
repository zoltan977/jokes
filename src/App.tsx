import "./App.css";
import { useEffect, useState } from "react";
import CategoryList from "./components/CategoryList/CategoryList";
import httpClient from "axios";
import Joke from "./components/Joke/Joke";
import AppContext from "./AppContext/AppContext";

function App() {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const getCategories = async () => {
    try {
      const response = await httpClient.get(
        "https://api.chucknorris.io/jokes/categories"
      );

      console.log("categories: ", response.data);
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="App">
      <h1>Chuck Norris jokes</h1>
      <div className="categories">
        <h2>categories</h2>
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
}

export default App;
