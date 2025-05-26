import { Container } from "react-bootstrap"
import ListaDeProductos from "../componentes/ListaDeProductos";

const Home = () => {

        return (
            <Container className="mt-4">
                <h1>Cosas que no necesitas</h1>
                <p>Total de productos sin filtros aplicados</p>
                <ListaDeProductos/>
            </Container>
        );
};

export default Home;