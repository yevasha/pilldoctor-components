import React, { useState } from "react";
import Username from "./Username";

const Register = () => {
    const [user, setUser] = useState('');

    return (
        <div> Register
            <Username onUserChange={setUser} />
        </div>
    )
}

export default Register;