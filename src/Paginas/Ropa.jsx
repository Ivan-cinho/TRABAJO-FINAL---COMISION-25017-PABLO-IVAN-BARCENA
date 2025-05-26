import { Container } from "react-bootstrap";
import ListaDeProductos from "../componentes/ListaDeProductos";

const Ropa = () => {
    return (
        <Container className="mt-4">
            <h1>Ropa para Hombre y Mujer</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse quisquam facere, molestiae voluptatum, quod voluptas, repellat quas quam mollitia animi repudiandae molestias aliquam inventore. Odio!</p>
            <h2>Masculina</h2>
            <ListaDeProductos categoria="men's clothing"/>
            
            <h2 className="mt-5">Femenina</h2>
            <ListaDeProductos categoria="women's clothing"/>
        </Container>
    );
};

export default Ropa;