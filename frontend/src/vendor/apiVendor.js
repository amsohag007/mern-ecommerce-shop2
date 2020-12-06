import { API } from "../config";

const vendorSignup = (user) => {
  console.log(user);
  return fetch(`${API}/vendor/signup`, {
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

const vendorSignin = (user) => {
  return fetch(`${API}/vendor/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export { vendorSignup, vendorSignin };
