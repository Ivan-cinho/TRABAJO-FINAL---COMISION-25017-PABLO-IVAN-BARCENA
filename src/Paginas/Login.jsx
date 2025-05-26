import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function Login() {
    const navigate = useNavigate();

    const manejadorDeLogueo = () => {
        localStorage.setItem('auth', 'true');
        navigate('/usuario/unUsuario');
    };

    return(
        <Container className="mt-5" style={{ minHeight: 'calc(100vh - 200px)' }}>
            <h2>el login</h2>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>User</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>                
                <Form.Group className="mb-3">
                    <Form.Label>Pass</Form.Label>
                    <Form.Control type="password"/>
                </Form.Group>
                <Button variant="dark" onClick={manejadorDeLogueo}>Entrá</Button>
            </Form>
        </Container>
    );
};

export default Login;