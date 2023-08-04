import React from 'react'


const ComponentA = () => {
    return (
        <div>Component A</div>
    )
}

const ComponentB = ({ username }) => {
    return (
        <div>{username}</div>
    )
}

const user = {
    username: 'lrodriguez',
    email: 'lrodriguez@4geeks.co',
    age: 41
};

const Ejemplo2 = () => {

    /* if (user === null) {
        return <ComponentA />
    } else {
        return <ComponentB {...user} />
    } */



    return (
        <>
        {
            user === null ?
            (
                <ComponentA />
            ):(
                <ComponentB {...user} />
            )
        }
        </>
    )


}

export default Ejemplo2