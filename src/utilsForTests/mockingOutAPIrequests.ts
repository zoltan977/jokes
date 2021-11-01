import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { routes } from "../utils/apiRoutes";

const mockingOutAPIrequests = () => {
  const mock = new MockAdapter(axios);

  //the mock gives back 2 categories when categories route is queried
  mock.onGet(routes.categories).reply(200, ["category001", "category002"]);
  //and jokes for those categories when category jokes are queried
  mock
    .onGet(/^https:\/\/api.chucknorris.io\/jokes\/random\?category=(.*)/)
    .reply(function (config) {
      const url: string = config.url || "";

      const search: string = new URL(url).search;
      const searchObj: URLSearchParams = new URLSearchParams(search);
      const category = searchObj.get("category");

      return [200, { value: `${category} joke` }];
    });
};

export default mockingOutAPIrequests;
