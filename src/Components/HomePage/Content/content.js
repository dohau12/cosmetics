import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./content.scss";
import Makeup from "../category/makeup";
import Skincare from "../category/skincare";
import Body from "../category/body";
import Hair from "../category/hair";
import Perfume from "../category/perfume";
import Others from "../category/others";
import ContentRight from './content-right';
import ContentCenter from './content-center';
import ContentLeft from "./content-left";
import Index from "../Product/index";

const Content = () => {

    return (
        <Router>
            <div className="content-all">
            <div >
                <ContentLeft/>
            </div>
            <div>
                <ContentCenter/>
            </div>
            <div>
                <ContentRight/>
            </div>
            </div>
         
            <div>
                <Switch>
                    <Route path="/makeup">
                        <Makeup />
                    </Route>
                    <Route path="/skincare">
                        <Skincare />
                    </Route>
                    <Route path="/body">
                        <Body />
                    </Route>
                    <Route path="/hair">
                        <Hair />
                    </Route>
                    <Route path="/perfume">
                        <Perfume />
                    </Route>
                    <Route path="/others">
                        <Others />
                    </Route>
                </Switch>
            </div>
               <Index/>
        </Router>
    );
}
export default Content