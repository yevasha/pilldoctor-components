<<<<<<< HEAD
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

=======
import React from "react";
import Email from "./Email";

const Register = () => {
    return (
        <div>
            register
            <Email />
        </div>
    )
}

>>>>>>> ec710119e16690abb1cdad5d4bd9d3e43dcb5e32
export default Register;