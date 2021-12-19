import {Switch, Route, useLocation} from "react-router-dom"
import { GlobalStyle } from "./app.styled";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import ProductDetail from "./components/Products/ProductDetail";
import Cart from "./components/Cart/Cart";
import {AnimatePresence} from "framer-motion"
import Login from "./components/Login/Login";
import Admin from "./components/Admin/Admin";
import Footer from "./components/Footer/Footer";


function App() {
  const location = useLocation();
  return (
    <>
    <GlobalStyle />
    <Header />
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>

        <Route  path="/" exact>
          <Home />
        </Route>

        <Route  path="/Products" exact>
          <Products />
        </Route>

        <Route  path="/Products/:id">
          <ProductDetail />
        </Route>

        <Route  path="/Cart">
          <Cart />
        </Route>

        <Route  path="/Login">
          <Login />
        </Route>

        <Route  path="/Admin">
          <Admin />
        </Route>

      </Switch>
    </AnimatePresence>
    <Footer />
    </>
  );
}

export default App;
