// import { getToken } from "../utils/getToken"

export const getUsers = () => {
  return fetch("http://localhost:8000/users", {
    headers: {
      "Authorization": `Token ${localStorage.getItem("auth_token")}`
    }
  })
    .then(response => response.json())
}

export const getUserById = (id) => {
  return fetch(`http://localhost:8000/users/${id}`, {
    headers: {
      "Authorization": `Token ${localStorage.getItem("auth_token")}`
    }
  })
    .then(response => response.json())
}
