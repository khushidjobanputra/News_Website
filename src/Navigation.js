import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navigation = () => {
    return ( 
        <div className="Nav">
        <Navbar bg="light" variant="light">
            <Container>
            <Navbar.Brand href="#home">News Website</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        </div>
     );
}
 
export default Navigation;