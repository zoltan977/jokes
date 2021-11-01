export const routes = {
  categories: "https://api.chucknorris.io/jokes/categories",
  categoryJokes: (category: string) =>
    `https://api.chucknorris.io/jokes/random?category=${category}`,
};
