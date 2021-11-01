import './App.css';
import { useEffect, useState} from 'react';
import httpClient from 'axios';

function App() {

  const [categories, setCategories] = useState<string[]>([]);

  const getCategories = async () => {
    try {
      const response = await httpClient.get("https://api.chucknorris.io/jokes/categories");
  
      console.log("categories: ", response.data)
      setCategories(response.data)

    } catch (error) {
      console.log(error)      
    }
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <div className="App">
      <h1>Chuck Norris jokes</h1>
    </div>
  );
}

export default App;
