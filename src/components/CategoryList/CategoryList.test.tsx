import { fireEvent, render } from "@testing-library/react";
import CategoryList from "./CategoryList";
import renderingWithAppContext from "../../utilsForTests/renderingWithAppContext";
import mockingOutAPIrequests from "./../../utilsForTests/mockingOutAPIrequests";

describe("CategoryList component tests", () => {
  beforeAll(() => {
    mockingOutAPIrequests();
  });

  test("CategoryList component is rendering based on 'categories' attribute", () => {
    //Given "category001", "category002" in categories attribute
    const { getAllByTestId } = render(
      <div className="CategoriesAndJoke" data-testid="CategoriesAndJoke">
        <CategoryList categories={["category001", "category002"]} />
      </div>
    );

    const categoriesAndJoke = getAllByTestId("Category");
    //Then "category001", "category002" + "none" are rendered
    expect(categoriesAndJoke).toHaveLength(3);
  });

  test("CategoryList Categories react to click events", () => {
    //Given "setSelectedCategory" mock function
    const setSelectedCategory = jest.fn();

    const { getByText } = renderingWithAppContext(
      <div className="CategoriesAndJoke" data-testid="CategoriesAndJoke">
        <CategoryList categories={["category001", "category002"]} />
      </div>,
      {
        selectedCategory: "",
        setSelectedCategory,
        setError: () => {},
        setWaitingForTheServer: () => {},
      }
    );

    const categoryToClickOn = getByText("category001");
    //When "category001" is clicked
    fireEvent.click(categoryToClickOn);
    //Then "setSelectedCategory" function is called with the "category001" string
    expect(setSelectedCategory).toBeCalledTimes(1);
    expect(setSelectedCategory).toHaveBeenCalledWith("category001");
  });
});
