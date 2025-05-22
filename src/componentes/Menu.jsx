// import { Button, Nav } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";


// function Menu() {

//     const navigate = useNavigate();
//     const isAuth = localStorage.getItem('auth') === 'true';

//     const cerrarSesion = () => {
//         localStorage.removeItem('auth');
//         navigate('/login')
//     };

//     return (
//         <>
//             <Nav>
//                 <Nav.Link as={Link} to="/">Inicio</Nav.Link>
//                 <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
//                 {
//                     isAuth && (
//                         <>
//                             <Nav.Link as={Link} to="/usuario/unUsuario">Perfil</Nav.Link>
//                             <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
//                         </>
//                     )
//                 }
//             </Nav>
//             <Nav>
//                 {!isAuth ? (
//                     <Nav.Link as={Link} to="/login">Login</Nav.Link>
//                 ) : (
//                     <Button variant="outline-light" onClick={cerrarSesion}></Button>
//                 )}
//             </Nav>
//         </>
//     );
// };

// export default Menu;