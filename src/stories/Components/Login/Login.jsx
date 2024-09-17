import React from "react";
import User from "./User";
import Password from "./Password";

const Login = () => {
    return (
        <div className="LoginInput">
            <User/>
            <Password/>
        </div>
    )
}

export default Login;