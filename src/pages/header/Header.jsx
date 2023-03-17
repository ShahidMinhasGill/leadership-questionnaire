import { useState } from 'react';
import { Container, ToggleButton, ToggleButtonGroup, Dropdown } from 'react-bootstrap';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsPersonCircle } from "react-icons/bs";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/images/logo.png'
function Header() {
  const [value, setValue] = useState([1, 2]);
  const [dropdownValue, setDropdownValue] = useState('COMMON BUSINESS PROBLEMS');
  const [dropdownValue2, setDropdownValue2] = useState('WAYS WE CAN HELP');
  const [selected, setSelected] = useState("About us");
  const commonBusiness = ["COMMON BUSINESS PROBLEMS", "COMMON BUSINESS PROBLEMS1", "COMMON BUSINESS PROBLEMS2", "COMMON BUSINESS PROBLEMS3"];
  const languages = ["About us", "German", "Russian", "Chinese", "Japanese", "Urdu", "Hindi"];
  const wayshelp = ["WAYS WE CAN HELP", "WAYS WE CAN HELP2", "WAYS WE CAN HELP3", "WAYS WE CAN HELP4"];
  // const handleChange = (val) => {
  //   setValue(val);
  // };
  const handleChange = (event) => {
    setSelected(event.target.value);
    setDropdownValue(event.target.value);
    setDropdownValue2(event.target.value);
  }
  const handleDropdownChange = (e) => {
    setDropdownValue(e.target.value);
    setDropdownValue2(e.target.value);
  };

  return (
    <>
    <div className="navclass">

    <Container>
      {/* <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
        <ToggleButton variant="light" value={1}>Line 1</ToggleButton>
        <ToggleButton variant="light" value={2}>Line 2</ToggleButton>
      </ToggleButtonGroup> */}
        <Navbar collapseOnSelect expand="lg" className="navbar navbar-light">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <BsPersonCircle className="profile-icon" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-nav ms-auto mobileStyle">
            <Link to="/">Your Home Page</Link>

            <Link to="/login">
              <div className="row">
                <div className="col-lg-3">
                  <BsPersonCircle className='icon' style={{ height: "30px", width: "29px" }} />
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
      <hr className='divider'/>
      <Container>
      <div className="row ">
        <div className="col-lg-4 col-12 logo " >
        {value.includes(1) && <img src={logo} alt="" />}
        </div>
        <div className="col-lg-8 col-12 dropdwons d-flex justify-content-around">
        {value.includes(2) && (
        // <Dropdown>
        //   <Dropdown.Toggle variant="light" id="dropdown-basic">{dropdownValue}</Dropdown.Toggle>
        //   <Dropdown.Menu>
        //     <Dropdown.Item onClick={() => setDropdownValue('Option 1')}>Option 1</Dropdown.Item>
        //     <Dropdown.Item onClick={() => setDropdownValue('Option 2')}>Option 2</Dropdown.Item>
        //     <Dropdown.Item onClick={() => setDropdownValue('Option 3')}>Option 3</Dropdown.Item>
        //   </Dropdown.Menu>
        // </Dropdown>
        <Nav className="ms-auto dir">
        <select className="select" defaultValue={dropdownValue} onChange={handleChange}>
          {commonBusiness.map((commonBusiness, index) => (
            <option key={index} value={commonBusiness}>{commonBusiness}</option>
          ))}
        </select>
      </Nav>
      )}
        {value.includes(2) && (
        // <Dropdown>
        //   <Dropdown.Toggle variant="light" id="dropdown-basic">{dropdownValue2}</Dropdown.Toggle>
        //   <Dropdown.Menu>
        //     <Dropdown.Item onClick={() => setDropdownValue2('WAYS WE CAN HELP')}>WAYS WE CAN HELP</Dropdown.Item>
        //     <Dropdown.Item onClick={() => setDropdownValue2('dropdownValue2 2')}>dropdownValue2 2</Dropdown.Item>
        //     <Dropdown.Item onClick={() => setDropdownValue2('dropdownValue2 3')}>dropdownValue2 3</Dropdown.Item>
        //   </Dropdown.Menu>
        // </Dropdown>
        <Nav className="ms-auto dir">
        <select className="select" defaultValue={dropdownValue2} onChange={handleChange}>
          {wayshelp.map((wayshelp, index) => (
            <option key={index} value={wayshelp}>{wayshelp}</option>
          ))}
        </select>
      </Nav>
       
      )}
        {value.includes(2) && (
        // <Dropdown>
        //   <Dropdown.Toggle variant="light" id="dropdown-basic">{dropdownValue}</Dropdown.Toggle>
        //   <Dropdown.Menu>
        //     <Dropdown.Item onClick={() => setDropdownValue('Option 1')}>Option 1</Dropdown.Item>
        //     <Dropdown.Item onClick={() => setDropdownValue('Option 2')}>Option 2</Dropdown.Item>
        //     <Dropdown.Item onClick={() => setDropdownValue('Option 3')}>Option 3</Dropdown.Item>
        //   </Dropdown.Menu>
        // </Dropdown>
        <Nav className="ms-auto dir">
        <select className="select" defaultValue={selected} onChange={handleChange}>
          {languages.map((language, index) => (
            <option key={index} value={language}>{language}</option>
          ))}
        </select>
        {/* {firstName ? (
          <div className="welcomeMessage">Hi {firstName}</div>
        ) : (
          <button onClick={() => setShowLogin(true)}>Login</button>
        )} */}
        {/* <button onClick={() => setShowLogin(true)}>Login</button> */}
      </Nav>
      )}
        </div>
      </div>
      </Container>
    
    </Container>
    </div>
    </>
  );
}

export default Header;
