import React, { useState } from "react";
import {
    Navbar,
    NavDropdown,
    Form,
    FormControl,
    Button,
    Nav,
} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./header.scss";
import Introduce from "../pages/introduce";
import Promotion from "../pages/promotion";
import 'font-awesome/css/font-awesome.min.css';
import '../fontawesome-web-5.15.3/css/all.min.css';
import NavHeader from "../nav";
import Content from "../Content/content";
import Login from "../Login/login";
import FormAdmin from "../../Functions/index";

const Header = () => {
    const [show, setShow] = useState(false);
    const [toggleState, setToggleState] = useState(1);
    
    const toggleTab = (index) => {
        setToggleState(index)
    }
    const handleClose = () => {
        setShow(false);
      };
      const handleShow = () => setShow(true);
    
        return (
            <Router>
                <div className="nav-header">
                    <Navbar >
                        <Navbar.Brand href="#" className="Phone"><i class="fas fa-phone-square-alt"> 098899900</i> </Navbar.Brand>
                        <marquee className="header-content-nav2" >Anna Cosmetics - Hệ thống mỹ phẩm thương hiệu chính hãng - Top 1 Việt Nam </marquee>
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="introduceName"
                                style={{ maxHeight: "100px" }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/" >EN|</Nav.Link>
                                <Nav.Link as={Link} to="/" >VN</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <Nav>
                            <Nav.Link as={Link} to="/" className="content-iconHelp" > <i class="far fa-question-circle" > Hỗ trợ </i> </Nav.Link >
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/" className="content-iconLogin" >
                                <i class="fas fa-user-circle">
                                </i> 
                                <div className="hover-Login"> 
                                <NavDropdown.Item as={Link} to="/makeup" className="item" onClick={handleShow}>Đăng nhập</NavDropdown.Item>                           
                                <NavDropdown.Item as={Link} to="/skincare" className="item">Đăng ký</NavDropdown.Item>                          
                                <NavDropdown.Item as={Link} to="/body" className="item">Thoát</NavDropdown.Item>
                                </div>
                                </Nav.Link >
                        </Nav>
                    </Navbar>
                    <Nav >
                        <Navbar.Brand href="#" className="img">
                            <Nav.Link as={Link} to="/"  className="header__logo-link" >
                                <img className="custom-logo" src="https://annashop.vn/wp-content/uploads/2021/02/logo-anna1.png" class="custom-logo" alt="Mỹ phẩm Anna Shop" srcset="https://annashop.vn/wp-content/uploads/2021/02/logo-anna1.png 905w, https://annashop.vn/wp-content/uploads/2021/02/logo-anna1-800x194.png 800w, https://annashop.vn/wp-content/uploads/2021/02/logo-anna1-768x186.png 768w, https://annashop.vn/wp-content/uploads/2021/02/logo-anna1-600x145.png 600w" sizes="(max-width: 100px) 100vw, 200px" /></Nav.Link>
                        </Navbar.Brand>
                        <Nav className="content-search">
                            <Form className="d-flex">
                                <FormControl placeholder="Search product"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    className="search" />
                                <Button variant="outline-secondary"
                                    id="button-addon2" > Search </Button>
                            </Form>
                        </Nav>
                        <Nav className="icon">
                            <Nav.Link as={Link} to="/"  className="content-iconcart" >
                                <i class="fas fa-bell"></i> </Nav.Link >
                            <Nav.Link as={Link} to="/"  className="content-iconcart" >
                                <i class="fas fa-envelope"></i> </Nav.Link >
                            <Nav.Link as={Link} to="/"  className="content-iconcart" >
                                <i className="fas fa-cart-plus" > </i> </Nav.Link >
                        </Nav>
                    </Nav>                  
                </div>
                
                
                <Login
                show={show}
                close={handleClose}
                />
               
                
            </Router>
        );
    }

export default  Header