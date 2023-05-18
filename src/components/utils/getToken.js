// export const getToken = () => {
//     const auth = localStorage.getItem("rare")
//     return JSON.parse(auth).token
// }
export const getToken = () => {
    return localStorage.getItem("auth_token")
}
