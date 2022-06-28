import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                <Post message='Hi, how r u?' likesCount='3'/>
                <Post message="It's my 1st post!" likesCount='784'/>
            </div>

        </div>)
}
export default MyPosts;