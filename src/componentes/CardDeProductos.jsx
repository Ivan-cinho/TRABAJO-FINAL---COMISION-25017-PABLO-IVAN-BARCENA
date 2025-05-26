import { Button, Card } from "react-bootstrap";


function CardDeProdctos({producto, agregarAlCarrito}) {

    return (
        <Card className="h-100 d-flex flex-column">
            <Card.Img
                variant="top"
                src={producto.image}
                alt={producto.title}
                className="card-img-top img-fluid"
                style={{height: '200px', objectFit:'cover'}}
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title>{producto.title}</Card.Title>
                <Card.Text>{producto.description.slice(0, 25)}</Card.Text>
                <Card.Text><strong>${producto.price}</strong></Card.Text>
                <Button variant="dark" onClick={() => agregarAlCarrito(producto)}>al carrito y mas alla</Button>
            </Card.Body>
        </Card>
    );
};

export default CardDeProdctos;