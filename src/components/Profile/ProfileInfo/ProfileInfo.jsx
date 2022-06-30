import React from "react";
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <img
                src='https://d32ijn7u0aqfv4.cloudfront.net/wp/wp-content/uploads/raw/young-woman-walking-down-palm-trees-street-revealing-downtown-los-picture-id1143355576-1.jpg'/>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>)
}
export default ProfileInfo;