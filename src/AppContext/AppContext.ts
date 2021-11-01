import React from "react";

interface IAppContext {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

const appContext = React.createContext<IAppContext>({
  selectedCategory: "",
  setSelectedCategory: () => {},
});

export default appContext;
