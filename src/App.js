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
import EditForm from "./components/Forms/EditForm";

function App() {
  const location = useLocation();
  return (
    <>
    <GlobalStyle />
    <Header />
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>

        <Route exact={true} path="/">
          <Home />
        </Route>

        <Route exact={true} path="/Products">
          <Products />
        </Route>

        <Route exact={true} path="/Products/:id">
          <ProductDetail />
        </Route>

        <Route exact={true} path="/Cart">
          <Cart />
        </Route>

        <Route exact={true} path="/Login">
          <Login />
        </Route>

        <Route exact={true} path="/Admin">
          <Admin />
        </Route>

        <Route exact={true} path="/Admin/:id">
          <EditForm />
        </Route>
      </Switch>
    </AnimatePresence>
    </>
  );
}

export default App;
