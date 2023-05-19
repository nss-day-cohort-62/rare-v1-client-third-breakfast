import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"
import { PostList } from "../components/posts/PostList"
import { CategoryList } from "../components/categories/CategoryList"
import { Post } from "../components/posts/Post"
import { TagList } from "../components/tag/Tags"
import { UserList } from "../components/user/UserList"
import { CategoryForm } from "../components/categories/CategoryForm"



export const ApplicationViews = ({ token, setToken }) => {
  return <>
    <Routes>
      <Route path="/login" element={<Login setToken={setToken} />} />
      <Route path="/register" element={<Register setToken={setToken} />} />
      <Route element={<Authorized token={token} />}>
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/:postId" element={<Post />} />
        <Route path="/categories" element={<CategoryList />} />
        <Route path="/categories/create" element={<CategoryForm /> } />
        <Route path="/users" element={<UserList />} />
        <Route path="/tags" element={<TagList />} />

      </Route>
    </Routes>
  </>
}
