// import { getToken } from "../components/utils/getToken"
// TODO: Create fetch call for all categories

export const getAllCategories = () => {
    return fetch("http://localhost:8000/categories", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}