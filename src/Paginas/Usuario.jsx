import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";


function Usuario() {
    const { id } = useParams();

    return(
        <Container className="mt-4" style={{ minHeight: 'calc(100vh - 200px)' }}> 
            <h2>El perfil de usuario</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, illo {id}</p>
        </Container>
    );
};

export default Usuario;