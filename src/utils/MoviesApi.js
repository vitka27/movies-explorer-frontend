import { BASE_URL_MOVIES } from "./const";

export default function getMovies(params) {
  return fetch(BASE_URL_MOVIES + "/beatfilm-movies", {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
}
