import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavMenu() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary ">
            <Container>
                <Navbar.Brand href="#home" style={{ marginLeft:50,marginRight:250, fontSize:30, fontWeight:500 }}>My Portofolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/profile">MyProfile</Nav.Link>
                        <Nav.Link href="#link">Directory</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavMenu;