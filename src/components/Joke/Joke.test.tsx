import { waitFor } from "@testing-library/react";
import Joke from "./Joke";
import renderingWithAppContext from "../../utilsForTests/renderingWithAppContext";
import mockingOutAPIrequests from "./../../utilsForTests/mockingOutAPIrequests";

describe("Joke component tests", () => {
  beforeAll(() => {
    mockingOutAPIrequests();
  });

  test("Joke component is rendering based on context data", async () => {
    //Given selected category is "my category" in the AppContext
    const { getByTestId } = renderingWithAppContext(<Joke />, {
      selectedCategory: "my category",
      setSelectedCategory: () => {},
      setError: () => {},
      setWaitingForTheServer: () => {},
    });

    await waitFor(() => {
      const spanInTheJokeComponent = getByTestId("JokeSpan");
      //Then a joke is displayed from the selected category
      expect(spanInTheJokeComponent.textContent).toBe("my category joke");
    });
  });
});
