import React, { useState } from "react";
import {Row, Col, Modal, Spinner, Form} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { register } from "./service/registerApi";
import registerSlice from './service/registerSlice'
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const initialValues = {
    username: "",
    email: "",
    password: "",
    // alreadyExists: "",
    // error: "",
  };
const SignUpModal = ({ show, onHide, welcomeMessage, hideSignUpShowLogin }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate ()
    // const isLoading = useSelector(state => state.auth.isLoading)
    // const error = useSelector(state => state.auth.error)
    // const token = useSelector(state => state.token)
    // const { isLoading, token, error } = useSelector((state) => auth.state);
      const [values, setValues] = useState(initialValues);


      const handleInputChange = (e) => {
        //const name = e.target.name 
        //const value = e.target.value 
        const { name, value } = e.target;
    
        setValues({
          ...values,
          [name]: value,
        });
      };
      
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
        username: values.username,
        email: values.email,
        password: values.password,
      };
      dispatch(register(userData));
      toast.success("you are succesfully Registerd");
      navigate(hideSignUpShowLogin)
    //   if (isLoading === 'loading') {
    //     return <div>Loading...</div>;
    //   }
    
    //   if (error) {
    //     return <div>Error: {error}</div>;
    //   }
    //   if (token) {
    //     localStorage.setItem('token', token);
    // }
  
      console.log('values',values);
    //   dispatch(registerSlice({values}))

    // const { welcomeMessage } = props;
    const emailRegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    
    // if (
    //   email === "" ||
    //   !emailRegExp.test(email) ||
    //   password === "" ||
    //   password.length < 8 ||
    //   username === ""
    // ) {
    //   if (!error) {
    //     setState({ ...state, error: true });
    //   }
    // } else {
    //   let body = {
    //     email: email,
    //     password: password,
    //     last_name: username,
    //   };
    //   console.log('body',body);
    // }
  };

  return (
    <Modal
    centered
    show={show}
    onHide={onHide}
    className="signup-modal"
>

    <Modal.Body>
        <Form onSubmit={handleSubmit}>
        <div className="main">
            <h1>Register now</h1>
            <p className="title">Do you already have an account?
                <span onClick={hideSignUpShowLogin}> Log in</span>
            </p>
            {/* <button className="google">
                <img src={logingoogle} alt="logingoogle" className="logingoogle"/>
                Continue with Google
            </button> */}
        </div>
        {/* <p>or sign up with your email</p> */}
        <Row>

            <Col lg={6} md={6} sm={6} xs={12}>
                <div className="namediv">
                    <input
                        type="text"
                        value={values.username}
                        onChange={handleInputChange}
                        name="username"
                        className="namebox"
                        placeholder="username"
                    />
                    <i className="fa fa-user nameimg"/>
                </div>
                {
                    values.error && values.username === "" ? (
                        <div className="error">Please enter your username.</div>
                    ) : ""
                }
            </Col>
        </Row>
        <div className="maildiv">
            <input
                type="email"
                value={values.email}
                onChange={handleInputChange}
                name="email"
                placeholder="Email"
                className="mailbox"
            />
            <i className="fa fa-envelope-square loginmail"/>
        </div>
        {
            values.error ? (
                <div className="error">
                    {
                        values.email === "" ? "Please enter your email." :
                            !values.emailRegExp.test(values.email) ? "Email is not valid." : ""
                    }
                </div>
            ) : ""
        }
        <div className="paswdiv">
            <input
                type="password"
                value={values.password}
                onChange={handleInputChange}
                name="password"
                className="paswbox"
                placeholder="Password"
            />
            <i className="fa fa-lock loginpassword"/>
        </div>
        {
            values.error ? (
                <div className="error">
                    {
                        values.password === "" ? "Please enter your password." :
                        values.password.length < 8 ? "Password must contain at least 8 characters."
                                : ""
                    }
                </div>
            ) : ""
        }
    


        <button className="loginbtn" type="submit" >
             Create Account
        </button>
      </Form>
    </Modal.Body>

</Modal>
    );
};

    export default SignUpModal;
