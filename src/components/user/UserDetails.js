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


    return <>
        <section key={`user--${userId}`} className="">
            <h1 className="">
                <p>User Name: {userToDetail.user?.username}</p>
                <p>First Name: {userToDetail.user?.first_name}</p>
                <p>Last Name: {userToDetail.user?.last_name}</p>
                <p>Email: {userToDetail.user?.email}</p>
                <p>Image URL: {userToDetail?.profile_image_url}</p>
                <p>Date Joined: {userToDetail?.created_on}</p>
                <p>Bio: {userToDetail?.bio}</p>
            </h1>
        </section>
        <button onClick={() => {
            navigate("/users")
        }}>Return to Users List</button>
    </>
}