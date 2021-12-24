import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Makeup from './Makeup';
import Product from './TradeMaket';
import TradeMaket from './Trademark';
import Skincare from './Skincare';

const Index = () => {
    return (
            <Router>
                 <Product/>
                 <TradeMaket/>
                 <Makeup/>
                 <Skincare/>
            </Router>
    );
}

export default Index;
