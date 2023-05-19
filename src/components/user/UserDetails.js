import React, { useEffect, useState } from "react"
import { getUsers, getUserById } from "../../managers/UserManager.js"
import { useNavigate, useParams } from "react-router-dom"

export const UserDetails = () => {
    const [userToDetail, setUser] = useState({})
    const navigate = useNavigate()
    const { userId } = useParams()

    useEffect(() => {
        getUserById(userId)
            .then(res => setUser(res))
    }, [userId])


    return (
        <section key={`user--${userId}`} className="">
            <h1 className="">
                {userToDetail.bio}
            </h1>
        </section>
    )
}