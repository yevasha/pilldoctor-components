import React, { useState } from "react";
import Password from "./Password";
import User from "./User"

const Login = () => {
    const [password, setPassword] = useState("");
    const [user, setUser] = useState("");

    return (
        <div className="LoginInput">
            <User/>
            <Password password={password} setPassword={setPassword} />
        </div>
    )
}

export default Login;
