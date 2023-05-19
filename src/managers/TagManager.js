export const getTags = () => {
    return fetch("http://localhost:8000/tags", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}

export const addTag = (tag) => {
    return fetch("http://localhost:8000/tags", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(tag)
    })
    .then(res => res.json())
}

export const getTag = (id) => {
    return fetch(`http://localhost:8000/tags/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}

export const updateTag = (tag) => {
    return fetch(`http://localhost:8000/tags/${tag.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(tag)
    })
}

export const deleteTag = (id) => {
    return fetch(`http://localhost:8000/tags/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
}