import React from "react";

const User = ({user, SetUser}) => {

    const handleBlur = () => { 
        console.log('user input blurred'); 
    };
    
    return (
    
        <div>
            User
            <input className="UserInput" type="text" placeholder="Username" onChange={ 
                    (e) =>  
                    setValue(e.target.value)} 
                onBlur={handleBlur} />
        </div>
    )
}

export default User;