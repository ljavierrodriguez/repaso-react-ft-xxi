import React from 'react'
import Ejemplo4 from './Ejemplo4';


const AlertComponet = ({ message }) => {
    return (
        <div className="alert alert-danger" role='alert'>
            {message}
        </div>
    )
}

const Ejemplo3 = () => {

    const error = {
        message: 'Error al abrir datos'
    };

    const user = {
        username: 'lrodriguez',
        email: 'lrodriguez@4geeks.co',
        age: 41
    };


    return (
        <>
            <div className='container'>
                <div className="row">
                    <div className="col-md-12">
                        {
                            !!error && <AlertComponet message={error.message} />
                        }
                        Ejemplo3
                    </div>
                    <div className="col-md-12">
                        <Ejemplo4 user={user}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ejemplo3