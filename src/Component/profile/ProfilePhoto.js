import React from "react";
import user from "./user.jpg";
import'./profilephoto.css'
const ProfilePhoto=()=>{
    return (
        <div className="ff">
            <img src={user} alt="user"/>
        </div>
    )
}
export default ProfilePhoto