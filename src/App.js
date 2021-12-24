import { Switch, Router, Route, BrowserRouter } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarComp from './Components/HomePage/nav';
import Header from './Components/HomePage/Header/header';
import ContenLeft from './Components/HomePage/Content/content-left';
import NavHeader from "./Components/HomePage/nav";
import Content from "./Components/HomePage/Content/content";
import Introduce from "./Components/HomePage/pages/introduce";
import Promotion from "./Components/HomePage/pages/promotion";
import Listuser from "./Components/Functions/Users/ListUser";
import Trademark from './Components/HomePage/pages/trademark';
import Trend from './Components/HomePage/pages/trend';
import Makeup from './Components/HomePage/category/makeup';
import Skincare from './Components/HomePage/category/skincare';
import Body from './Components/HomePage/category/body';
import Hair from './Components/HomePage/category/hair';
import Perfume from './Components/HomePage/category/perfume';
import Others from './Components/HomePage/category/others';
import Dashboard from "./Components/Functions/index"
import Footer from './Components/Footer';
function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <Dashboard/>  */}
        {/* <Listuser/>  */}
        <Header />
        <NavHeader />
        <Switch>
          <Route path="/" exact>
            <Content />
          </Route>
          <Route path="/introduce">
            <Introduce />
          </Route>
          <Route path="/promotion">
            <Promotion />
          </Route>
          <Route path="/trademark">
            <Trademark />
          </Route>
          <Route path="/trend">
            <Trend />
          </Route>
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
      <Footer/>
    </BrowserRouter>

  );
}

export default App;
