import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"

import { TagList } from "../components/tag/Tags"
import { UserList } from "../components/user/UserList"



export const ApplicationViews = ({ token, setToken }) => {
  return <>
    <Routes>
      <Route path="/login" element={<Login setToken={setToken} />} />
      <Route path="/register" element={<Register setToken={setToken} />} />
      <Route element={<Authorized token={token} />}>
        <Route path="/users" element={<UserList />} />
        <Route path="/tags" element={<TagList />} />

      </Route>
    </Routes>
  </>
}
