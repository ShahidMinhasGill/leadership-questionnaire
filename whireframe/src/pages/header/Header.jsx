import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsPersonCircle } from "react-icons/bs";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/images/logo.png'
const Header = () => {
  return (
    <>
    <div className="naveclass">
    
    <Navbar collapseOnSelect expand="lg" className="navbar navbar-light">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <BsPersonCircle className="profile-icon" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-nav ms-auto mobileStyle">
            <Link to="/">Your Home Page</Link>

            <Link to="/login">
              <div className="row">
                <div className="col-3">
                  <BsPersonCircle style={{ height: "30px", width: "29px" }} />
                </div>
                <div className="col-8">
                  Username <br /> <u className="underline">logout</u>
                </div>
              </div>
            </Link>
            <hr />
            <div className="Search">
              <input id="eval" type="text" />
              <button>Search</button>
            </div>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
    <div className="container">
    <div className="row d-flex justify-content-center">
        <div className="col-12 divider">
        <hr />
        </div>
    </div>
    </div>
    <Navbar collapseOnSelect expand="lg" className="navbar navbar-light">
      <Container>
        <Navbar.Brand href="#home" className="logo"><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          
            
          </Nav>
          <Nav>
          <NavDropdown title="COMMON BUSINESS PROBLEMS" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          <NavDropdown title="WAYS WE CAN HELP" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="About us" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </>
  );
};

export default Header;

{
  /* <div
                                className="nav-link signup"

                            >
                                <FaUserCircle style={{ width: "1.5rem", height: "1.5rem" }} className="mb-0.5" /> Sign up/ Login
                            </div> */
}
{
  /* <Dropdown className="signup">
                                <Dropdown.Toggle className="signup" id="dropdown-basic">
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    
                                    <Dropdown.Item>
                                        <Link to="/user-view" style={{ textDecoration: "none", color: "black", }}>
                                            Profile
                                        </Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link to="/logout" style={{ textDecoration: "none", color: "black", }}>
                                            Logout
                                        </Link>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown> */
}
