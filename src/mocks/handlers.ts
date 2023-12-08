import { http, HttpResponse } from "msw";

export const handlers = [
  http.get(
    "https://jsonplaceholder.typicode.com/users",
    ({ request, params, cookies }) => {
      return HttpResponse.json([
        {
          name: "Bruce Wayne",
        },
        {
          name: "Clark Kent",
        },
        {
          name: "Tony Stark",
        },
      ]);
    },
  ),
];
