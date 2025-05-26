import { Container } from "react-bootstrap";
import ListaDeProductos from "../componentes/ListaDeProductos";

const Joyeria = () => {
    return (
        <Container className="mt-4">
            <h1>Joyas y Accesorios</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum explicabo enim sint in recusandae numquam laboriosam ea unde, aliquid tempore ab aspernatur, ex cumque blanditiis sit. Dolorem dolorum aliquam veritatis illum earum doloribus officia accusantium ex quasi cumque atque cum consectetur provident inventore labore, possimus exercitationem! Aut sit eligendi similique.</p>
            <ListaDeProductos categoria="jewelery"/>
        </Container>
    );
};

export default Joyeria;