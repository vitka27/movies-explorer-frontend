import { BASE_URL_MAIN } from "./const";
export const register = ({ email, password, name }) => {
  return fetch(`${BASE_URL_MAIN}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};

export const authorize = ({ email, password }) => {
  return fetch(`${BASE_URL_MAIN}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.token) {
        localStorage.setItem("token", data.token);
        return data;
      }
    })
    .catch((error) => console.log(error));
};

export const apiCheckToken = (localToken) => {
  return fetch(`${BASE_URL_MAIN}/users/me`, {
    method: "GET",
    headers: { authorization: `Bearer ${localToken}` },
  }).then((response) => {
    return response.json();
  });
};
