import React from "react";

const Username = ({onUserChange}) => {

    const onUserComplete = (e) => {
        onUserChange(e.target.value)
        console.log(e.target.value)
    }

    return (
        <div>
            Username
            <input 
            onBlur={onUserComplete}
            />
        </div>
    )
}

export default Username;