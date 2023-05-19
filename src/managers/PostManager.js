export const getAllPosts = () => {
    return fetch("http://localhost:8000/posts", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}

export const getPostsById = (id) => {
    return fetch(`http://localhost:8000/posts/${id}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}

export const getPostsByAuthor = (authorId) => {
    return fetch(`http://localhost:8000/posts?user_id=${authorId}`, {
        headers: {
            Authorization: `Token ${localStorage.getItem("auth_token")}`,
        },
    }).then((res) => res.json());
};
