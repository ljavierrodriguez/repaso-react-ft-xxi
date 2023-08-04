import React, { useState } from 'react'


const ListItem = ({ children }) => {
    return <li>{children}</li>
}

const Ejemplo5 = () => {

    const [nombres, setNombres] = useState([
        "Hugo", "Paco", "Luis"
    ])

    const fullName = () => {
        return "Luis Rodriguez";
    }

    /* const newArray = nombres.map((item, index) => {
        return <li key={index}>{item.toUpperCase()}</li>
    }) */

    const newArray = nombres.map((item, index) => {
        return <ListItem key={index}>{item.toUpperCase()}</ListItem>
    })

    return (
        <div>
            <h4>Ejemplo 5</h4>
            <ul>
                {
                    newArray
                }
            </ul>

            <ol>
                {
                    nombres.length > 0 &&
                    nombres.map((item, index) => {
                        return <ListItem key={index}>{item.toUpperCase()}</ListItem>
                    })
                }
            </ol>
        </div>
    )
}

export default Ejemplo5