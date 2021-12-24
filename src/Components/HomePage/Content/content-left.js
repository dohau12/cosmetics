import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./left.scss";
import Makeup from "../category/makeup";
import Skincare from "../category/skincare";
import Body from "../category/body";
import Hair from "../category/hair";
import Perfume from "../category/perfume";
import Others from "../category/others";
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import ContentRight from './content-right';
import ContentCenter from './content-center';

const ContentLeft = () => {
    return (
        <div className="nav-left">
              <div className="product-1" >
                    {['end'].map((direction) => (
                        <DropdownButton
                            className="btn-1"
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="rgb(227, 231, 231)"
                            title={` TRANG ĐIỂM - MAKEUP `}>     
                            <div className="hover-makeup">
                            <Dropdown.Item eventKey="1">Kem nền-BB-CC</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="2">Phấn nước</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="3">Che khuyết điểm</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="4">Mascara</Dropdown.Item>
                                </div>
                        </DropdownButton>
                    ))}
                </div>
                <div className="product-1">
                    {['end'].map((direction) => (
                        <DropdownButton
                        className="btn-1"
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="rgb(227, 231, 231)"
                            title={` CHĂM SÓC DA - SKINCARE `}
                        >
                            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                        </DropdownButton>
                    ))}
                </div>
                <div className="product-1" >
                    {['end'].map((direction) => (
                        <DropdownButton
                        className="btn-1"
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="rgb(227, 231, 231)"
                            title={` CHĂM SÓC CƠ THỂ - BODYCARE `}
                        >
                            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                        </DropdownButton>
                    ))}

                </div>
                <div className="product-1">
                    {['end'].map((direction) => (
                        <DropdownButton
                        className="btn-1"
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="rgb(227, 231, 231)"
                            title={` CHĂM SÓC TÓC - HAIR `}
                        >
                            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                        </DropdownButton>
                    ))}
                </div>
                <div className="product-1" >
                    {['end'].map((direction) => (
                        <DropdownButton
                        className="btn-1"
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="rgb(227, 231, 231)"
                            title={` NƯỚC HOA - PERFUME `}
                        >
                            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                        </DropdownButton>
                    ))}

                </div>
                <div className="product-1">
                    {['end'].map((direction) => (
                        <DropdownButton
                        className="btn-1"
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="rgb(227, 231, 231)"
                            title={` SẢN PHẨM KHÁC - OTHERS `}
                        >
                            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                        </DropdownButton>
                    ))}
                </div>
        </div>
    );
}

export default ContentLeft;
