import React from "react";

export interface IAppContext {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
  setWaitingForTheServer: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = React.createContext<IAppContext>({
  selectedCategory: "",
  setSelectedCategory: () => {},
  setError: () => {},
  setWaitingForTheServer: () => {},
});

export default AppContext;
