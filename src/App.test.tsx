import { render, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { routes } from "./utils/apiRoutes";

describe("App component rendering", () => {
  beforeAll(() => {
    const mock = new MockAdapter(axios);

    //Given http requests to the categories route of the API are mocked out
    //and the mock gives back 2 categories
    mock.onGet(routes.categories).reply(200, ["category001", "category002"]);
  });

  test("h1 rendering", async () => {
    const { getByText } = render(<App />);

    await waitFor(() => {
      const h1Element = getByText("Chuck Norris jokes");
      //H1 element in the App component is rendered
      expect(h1Element).toBeInTheDocument();
    });
  });

  test("Error component NOT rendering", async () => {
    const { queryByTestId } = render(<App />);

    await waitFor(() => {
      const errorComponent = queryByTestId("error");
      //Error component in the App component is NOT rendered
      expect(errorComponent).not.toBeInTheDocument();
    });
  });
});

describe("API error when querying categories", () => {
  beforeAll(() => {
    const mock = new MockAdapter(axios);

    //Given network error on categories route
    mock.onGet(routes.categories).networkErrorOnce();
  });

  test("Error component rendering", async () => {
    const { getByTestId, getAllByTestId } = render(<App />);

    await waitFor(() => {
      const errorComponent = getByTestId("error");
      //Then Error component in the App component is rendered
      expect(errorComponent).toBeInTheDocument();

      //And only category none is rendered
      expect(getAllByTestId("Category")).toHaveLength(1);
    });
  });
});

describe("App tests", () => {
  beforeAll(() => {
    const mock = new MockAdapter(axios);

    //Given http requests to API are mocked out

    //and the mock gives back 2 categories
    mock.onGet(routes.categories).reply(200, ["category001", "category002"]);
    //and jokes for those categories
    mock
      .onGet(/^https:\/\/api.chucknorris.io\/jokes\/random\?category=(.*)/)
      .reply(function (config) {
        const url: string = config.url || "";

        const search: string = new URL(url).search;
        const searchObj: URLSearchParams = new URLSearchParams(search);
        const category = searchObj.get("category");

        return [200, { value: `${category} joke` }];
      });
  });

  test("CategoryList component rendering", async () => {
    const { getAllByTestId } = render(<App />);

    await waitFor(() => {
      //Then 2 categories + category none are rendered
      expect(getAllByTestId("Category")).toHaveLength(3);
    });
  });

  test("Category click is working and Joke is rendering", async () => {
    const { getAllByTestId, getByTestId, queryByTestId } = render(<App />);

    let CategoryList: any[] = [];
    await waitFor(() => {
      CategoryList = getAllByTestId("Category");
      //Then 2 categories + category none are rendered
      expect(CategoryList).toHaveLength(3);
    });

    //If category001 is clicked
    fireEvent.click(CategoryList[1]);

    await waitFor(() => {
      const Joke1Span = getByTestId("JokeSpan");
      //Then a joke from the first category is shown
      expect(Joke1Span.textContent).toBe("category001 joke");
    });

    //If category002 is clicked
    fireEvent.click(CategoryList[2]);

    await waitFor(() => {
      const Joke2Span = getByTestId("JokeSpan");
      //Then a joke from the second category is shown
      expect(Joke2Span.textContent).toBe("category002 joke");
    });

    //If category none is clicked
    fireEvent.click(CategoryList[0]);

    await waitFor(() => {
      //Then the joke component disappears
      expect(queryByTestId("Joke")).not.toBeInTheDocument();
    });
  });
});

describe("API error when querying a joke", () => {
  beforeAll(() => {
    const mock = new MockAdapter(axios);

    //Given http requests to API are mocked out
    //and the mock gives back 2 categories when querying categories
    mock.onGet(routes.categories).reply(200, ["category001", "category002"]);
    //and network error when querying a category joke
    mock
      .onGet(/^https:\/\/api.chucknorris.io\/jokes\/random\?category=(.*)/)
      .networkErrorOnce();
  });

  test("Error component rendering when clicking on a category", async () => {
    const { getAllByTestId, getByTestId, queryByTestId } = render(<App />);

    let CategoryList: any[] = [];
    await waitFor(() => {
      CategoryList = getAllByTestId("Category");
      //Then 2 categories + category none are rendered
      expect(CategoryList).toHaveLength(3);

      const errorComponent = queryByTestId("error");
      //And the Error component in the App component is NOT rendered
      expect(errorComponent).not.toBeInTheDocument();
    });

    //If category001 is clicked
    fireEvent.click(CategoryList[1]);

    await waitFor(() => {
      const Joke1Span = getByTestId("JokeSpan");
      //Then a joke from the first category is NOT shown
      expect(Joke1Span.textContent).toBe("");

      const errorComponent = getByTestId("error");
      //And the Error component in the App component is rendered
      expect(errorComponent).toBeInTheDocument();
    });
  });
});
