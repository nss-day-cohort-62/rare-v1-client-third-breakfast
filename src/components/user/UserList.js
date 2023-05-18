import React, { useEffect, useState } from "react"
import { getUsers } from "../../managers/UserManager.js"
import { useNavigate } from "react-router-dom"

export const UserList = () => {
    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getUsers()
            .then(data => setUsers(data))
    }, [])

    return (
        users
            .sort((a, b) => a.user.last_name.localeCompare(b.user.last_name))
            .map(user => {
                return <section key={`user--${user.id}`} className="">
                    <h1 className="">{user.user.username} - {user.user.first_name} {user.user.last_name}  - {user.user.email}</h1>
                </section>
            })
    )
}