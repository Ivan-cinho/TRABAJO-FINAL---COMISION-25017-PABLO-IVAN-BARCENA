import { Button, Container } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShopify } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

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
                    <Navbar.Brand as={Link} to="/">
                    <FontAwesomeIcon icon={faShopify} className="me-2" style={{ fontSize: '1.5rem' }}/>Brand</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/">Productos</Nav.Link>
                                <Nav.Link as={Link} to="/electronica">Electrónica</Nav.Link>
                                <Nav.Link as={Link} to="/joyeria">Joyeria</Nav.Link>
                                <Nav.Link as={Link} to="/ropa">Ropa</Nav.Link>
                                <Nav.Link as={Link} to="/productos">Sobre nosotros</Nav.Link>
                                
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
                            <Nav.Link className="ms-3">
                            <FontAwesomeIcon icon={faShoppingCart} style={{ color: 'white', fontSize: '1.2rem' }} />
                        </Nav.Link>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
};

export default NavBar;