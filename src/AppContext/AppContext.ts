import React from "react";

export interface IAppContext {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  getData: (
    url: string,
    setData: React.Dispatch<React.SetStateAction<any>>
  ) => void;
}

const AppContext = React.createContext<IAppContext>({
  selectedCategory: "",
  setSelectedCategory: () => {},
  getData: () => {},
});

export default AppContext;
