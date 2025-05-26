import { useEffect, useState } from "react";
import CardDeProdctos from "./CardDeProductos";
import { Row, Col } from 'react-bootstrap';


function ListaDeProductos ({categoria = null}) {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        let url = 'https://fakestoreapi.com/products';
        if (categoria) {
            url = `https://fakestoreapi.com/products/category/${categoria}`;
        }

        fetch(url)
            .then((response)=> response.json())
            .then((data) => {
                setProductos(data);
                setLoading(false);
            })
            .catch((error)=> {
                console.error('Error al hacer fetch amigo', error);
                setLoading(false)
            });
    }, [categoria]);

    const manejadorAgregarAlCarrito = (producto)=> {
        alert(`Agregaste ${producto.title}`)
    };

    if (loading) {
        return <div>Cargando...</div>
    }

    return (
        <Row>
            {productos.map((producto) =>(
                <Col md={4} key={producto.id} className="mb-4">
                    <CardDeProdctos producto={producto} agregarAlCarrito={manejadorAgregarAlCarrito}/>
                </Col>
            ))}
        </Row>
    )
};

export default ListaDeProductos;