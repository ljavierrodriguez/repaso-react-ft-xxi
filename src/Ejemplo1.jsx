import React from 'react';
import Enlace from './components/Enlace';
import * as styles from './styles';
import Button from './components/Button';
import Panel from './components/Panel';



const Ejemplo1 = () => {

    return (
        <>
            <div>Ejemplo 1</div>

            <a href={""} id={""} className={""} style={{}}>Texto</a>
            <Enlace href={""} id={""} className={""} style={styles.myStyle}>
                Texto
            </Enlace>
            <Enlace href="https://google.cl" className="btn btn-info">
                Google
            </Enlace>

            <Enlace href="https://google.cl" className="btn btn-info" style={styles.myStyle2}>
                Google
            </Enlace>
            <Button />
            <Panel />
            <div className='bg-danger'>Texto</div>
        </>
    )
}

export default Ejemplo1;