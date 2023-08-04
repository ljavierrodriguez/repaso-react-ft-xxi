import React, { useEffect, useState } from 'react'


const Button = ({ onClick }) => {
    useEffect(() => {
        console.log('component mounted');

        return () => {
            console.log('componented unmounted');
        }

    }, [])
    return <button className='btn btn-info btn-sm m-1' onClick={onClick}>Click</button>
}


const Ejemplo6 = () => {

    const [nombres, setNombres] = useState([
        "Hugo", "Paco", "Luis"
    ])

    const [search, setSearch] = useState("");


    const saludo = (e) => {
        console.log("Event:", e.type);
        console.log("Hola desde un Click");
    }

    const mostrarNombre = (e, nombre) => {
        console.log("event:", e.type)
        console.log(nombre)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (search !== '') {
            //alert(`Buscando ${search} ...`);
            //setNombres((prevNombres) => [...prevNombres, search])
            //setNombres(nombres.concat(search))
            setNombres([...nombres, search])
            e.target.reset()
        }
    }

    const handleChange = e => setSearch(e.target.value)


    useEffect(() => {
        console.log('component mounted');


        return () => {
            console.log('componented unmounted');
        }

    }, [])

    useEffect(() => {
        console.log("Nombres ha sido actualizado")
    }, [nombres])

    return (
        <>
            <div>Ejemplo6</div>
            <Button onClick={(e) => {
                console.log("Hola desde un " + e.type);
            }} />

            <Button onClick={saludo} />

            <ul className="list-group w-50 mx-auto my-3">
                {
                    nombres.length > 0 &&
                    nombres.map((nombre, index) => {
                        return (
                            <li key={index} className='list-group-item list-group-item-action d-flex justify-content-between'>
                                <span className='text-secondary'>
                                    {nombre}
                                </span>
                                <span>
                                    <Button onClick={(e) => {
                                        mostrarNombre(e, nombre);
                                    }} />
                                </span>
                            </li>
                        )
                    })
                }
            </ul>

            <form className="w-50 mx-auto my-3" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="search" className="form-label">Search</label>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder='Insert text to search...' onChange={handleChange} />
                        <button className="btn btn-info btn-sm">search</button>
                    </div>
                </div>
            </form>

        </>
    )
}

export default Ejemplo6