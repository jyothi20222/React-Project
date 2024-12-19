import React from 'react';
import { Button, Container, Form, Nav, Navbar, NavDropdown, Row, Col } from
'react-bootstrap';
function NavScrollExample() {
return (
<>
<Navbar expand="lg" className="bg-body-tertiary">
<Container fluid>
<Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
<Navbar.Toggle aria-controls="navbarScroll" />
<Navbar.Collapse id="navbarScroll">
<Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}
navbarScroll>
<Nav.Link href="#action1">Home</Nav.Link>
<Nav.Link href="#action2">Link</Nav.Link>
<NavDropdown title="Dropdown" id="navbarScrollingDropdown">
<NavDropdown.Item href="#action3">Action</NavDropdown.Item>
<NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
<NavDropdown.Divider />
<NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
</NavDropdown>
<Nav.Link href="#" disabled>
Disabled Link
</Nav.Link>
</Nav>
<Form className="d-flex">
<Form.Control type="search" placeholder="Search" className="me-2"
aria-label="Search" />
<Button variant="outline-success">Search</Button>
</Form>
</Navbar.Collapse>
</Container>
</Navbar>
<Container className="mt-5">
<Row>
<Col>
<h1>Welcome to React Bootstrap</h1>
<p>Start building your application with these components!</p>
<Button variant="primary">Click Me</Button>
</Col>
</Row>
</Container>
</>
);
}
export default NavScrollExample;
