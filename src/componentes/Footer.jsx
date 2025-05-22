import { Col, Container, Row } from "react-bootstrap";



function Footer() {
    return(
        <footer className="bg-dark text-white text-center py-4 mt-4">
            <Container>
                <Row>
                    <Col>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ea?</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Col>
                    <Col>
                        {/* <a href="" className="text-white me-3"><i className="fa fa-twitter fa-2x"></i></a>
                        <a href="" className="text-white me-3"><i className="fa fa-twitter fa-2x"></i></a>
                        <a href="" className="text-white me-3"><i className="fa fa-twitter fa-2x"></i></a> */}
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer; 