import { render } from "@testing-library/react";
import AppContext, { IAppContext } from "../AppContext/AppContext";

const renderingWithAppContext = (ui: JSX.Element, value: IAppContext) => {
  return render(<AppContext.Provider value={value}>{ui}</AppContext.Provider>);
};

export default renderingWithAppContext;
