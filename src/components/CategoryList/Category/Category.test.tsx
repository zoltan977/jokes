import { fireEvent, render } from "@testing-library/react";
import Category from "./Category";
import renderingWithAppContext from "../../../utilsForTests/renderingWithAppContext";
import mockingOutAPIrequests from "./../../../utilsForTests/mockingOutAPIrequests";

describe("Category component tests", () => {
  beforeAll(() => {
    mockingOutAPIrequests();
  });

  test("Category component is rendering based on 'category' attribute", () => {
    //Given "category001" in category attribute
    const { getByTestId } = render(<Category category="category001" />);

    const categorySpan = getByTestId("CategorySpan");
    //Then Category component rendered with the "category001" text
    expect(categorySpan.textContent).toBe("category001");
  });

  test("Category component reacts to click event", () => {
    //Given "setSelectedCategory" mock function
    const setSelectedCategory = jest.fn();

    const { getByTestId } = renderingWithAppContext(
      <Category category="my category" />,
      {
        selectedCategory: "",
        setSelectedCategory,
        setError: () => {},
        setWaitingForTheServer: () => {},
      }
    );

    const categorySpan = getByTestId("CategorySpan");
    //When "my category" is clicked
    fireEvent.click(categorySpan);
    //Then "setSelectedCategory" function is called with the "my category" string
    expect(setSelectedCategory).toBeCalledTimes(1);
    expect(setSelectedCategory).toHaveBeenCalledWith("my category");
  });
});
