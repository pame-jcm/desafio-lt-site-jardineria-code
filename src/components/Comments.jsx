import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap'

const Comments = () => {

    const endPoint = '../misCompras.json';
    const [misCompras, setMisCompras] = useState([]);

    useEffect(() => {
        const getMisCompras = async () => {
            try {
                const res = await fetch(endPoint);
                const data = await res.json();
    
                setMisCompras(data);
            } catch (error) {
                console.log(error);
            }
        };
        getMisCompras();
    }, [])

  return (
    <>
    <Container className='ms-2 pe-3'>
    <strong><h4 className='mt-5 pb-1 text-granite fw-bold'>Comentarios</h4></strong>
            {misCompras.length > 0 ? misCompras.map(producto => (
                    
                    <div className="d-flex justify-content-between align-items-center border-top"
                        key={producto.id}>

                        <div className="d-flex my-4 justify-content-between align-items-end align-items-center col-sm-12 col-md-6 col-lg-9">
                                
                                <div className="mx-4 w-75">
                                    <h5 className="fw-bold text-granite">{producto.name}</h5>
                                    <p className="text-granite">{producto.desc}</p>
                                </div>

                                <div className='text-center'>
                                    Valor: <strong>${producto.price}</strong>
                                </div>
                        </div>

                        <div className='col-sm-12 col-md-6 col-lg-2'>
                            
                        </div>

                    </div>
                )) : '' }

    </Container>
    </>
  )
}

export default Comments