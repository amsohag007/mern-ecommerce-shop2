import { API } from "../config";

const signup = (user) => {
  console.log(user);
  return fetch(`${API}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      console.log("server response:", response);
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export { signup };
