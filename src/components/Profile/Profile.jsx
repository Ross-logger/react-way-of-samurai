import React from "react";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div >
            <img
                src='https://d32ijn7u0aqfv4.cloudfront.net/wp/wp-content/uploads/raw/young-woman-walking-down-palm-trees-street-revealing-downtown-los-picture-id1143355576-1.jpg'/>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>)
}
export default Profile;