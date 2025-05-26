import { Container } from "react-bootstrap";
import ListaDeProductos from "../componentes/ListaDeProductos";

const Electronica = () => {
    return (
        <Container className="mt-4">
            <h1>Electrónica</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur sit, possimus voluptatem consequatur eaque natus ut eum! Quod voluptates sequi at repudiandae distinctio, voluptatem laborum vero reiciendis! Suscipit corrupti facere minus sapiente nobis soluta voluptate, dignissimos expedita, quae, et perferendis pariatur esse. Ad magni fugiat qui, cupiditate voluptates autem at!</p>
            <ListaDeProductos categoria="electronics"/>
        </Container>
    );
};

export default Electronica;