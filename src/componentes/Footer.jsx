import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return(
        <footer className="bg-dark text-white text-center py-4 mt-auto">
            <Container>
                <Row>
                    <Col>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ea?</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Col>
                    <Col>
                        <a href="#" className="text-white me-3">
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>
                        <a href="#" className="text-white me-3">
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                        <a href="#" className="text-white me-3">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;  