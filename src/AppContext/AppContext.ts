import React from "react";

export interface IAppContext {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = React.createContext<IAppContext>({
  selectedCategory: "",
  setSelectedCategory: () => {},
  setError: () => {},
});

export default AppContext;
