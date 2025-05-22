import { Button, Container } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function NavBar() {

    const navigate = useNavigate();

    const isAuth = localStorage.getItem('auth') === 'true';

    const cerrarSesion = () => {
        localStorage.removeItem('auth');
        navigate('/login');
    };

        return (
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container >
                    <Navbar.Brand as={Link} to="/">un brand</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/">Jom</Nav.Link>
                                <Nav.Link as={Link} to="/productos">Sobre nos</Nav.Link>
                                {isAuth && (
                                    <>
                                        <Nav.Link as={Link} to="/usuario/unUsuario">Perfil</Nav.Link>
                                        <Nav.Link as={Link} to="/administracion">Admin</Nav.Link>
                                    </>
                                )}
                            </Nav>
                            <Nav>
                                {!isAuth ? (
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                ) : (
                                    <Button variant="outline-light" onClick={cerrarSesion}>Cerrar sesion</Button>
                                )}
                            </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
};

export default NavBar;