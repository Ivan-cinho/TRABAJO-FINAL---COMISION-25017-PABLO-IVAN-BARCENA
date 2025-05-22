import { Container, ListGroup } from "react-bootstrap";

function Productos() {
    return(
        <Container className="mt-4">
            <h2>el capitalismo te ofrece esto que no necesitas</h2>
            <ListGroup>
                <ListGroup.Item>Producto A</ListGroup.Item>
                <ListGroup.Item>Producto B</ListGroup.Item>
                <ListGroup.Item>Producto C</ListGroup.Item>
            </ListGroup>
        </Container>
    );
};

export default Productos;