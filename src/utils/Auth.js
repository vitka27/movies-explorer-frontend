import { BASE_URL_MAIN } from "./const";
export const register = ({ email, password, name }) => {
  console.log(email, password, name);
  return fetch(`${BASE_URL_MAIN}/signup`, {
    method: "POST",
    headers: {
      // 'Accept': 'application/json',
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name }),
  })
    .then((response) => {
      // console.log(response.json());
      try {
        if (response.status === 200) {
          return response.json();
        }
      } catch (e) {
        return e;
      }
    })
    .then((res) => {
      console.log("register");
      return res;
    })
    .catch((err) => console.log(err));
};

export const authorize = ({ email, password }) => {
  return fetch(`${BASE_URL_MAIN}/signin`, {
    method: "POST",
    headers: {
      // 'Accept': 'application/json',
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
    .catch((err) => console.log(err));
};

export const apiCheckToken = (localToken) => {
  return fetch(`${BASE_URL_MAIN}/users/me`, {
    method: "GET",
    headers: { authorization: `Bearer ${localToken}` },
  }).then((response) => {
    return response.json();
  });
};
