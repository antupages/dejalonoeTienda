import React from "react";

function Navbar ({children}){
    return (
		<div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src="../LOGO.png" alt="DeJaloNoe" className="logo"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Remeras</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Basos</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Stikers</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>


		</div>		
	)	

}

export default Navbar;

/*import React from "react";
import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import logo from "./logo.svg";

function NavBar(props) {
  const { cartItems } = props;

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top me-2"
            alt="Logo de Mi Tienda"
          />
          Mi Tienda
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#remeras">Remeras</Nav.Link>
            <Nav.Link href="#stikers">Stikers</Nav.Link>
            <Nav.Link href="#vasos">Vasos</Nav.Link>
            <Nav.Link href="#discos">Discos</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#cart">
              <i className="fas fa-shopping-cart"></i>
              <span className="ms-2">Carrito</span>
              {cartItems.length > 0 && (
                <Badge bg="primary" className="ms-1">
                  {cartItems.length}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

*/


