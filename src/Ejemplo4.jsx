import React from 'react'

const Ejemplo4 = ({ user }) => {

    if (!user) return <div>Componente Privado</div>

    return (
        <div>Ejemplo4</div>
    )
}

export default Ejemplo4