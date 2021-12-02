import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ProductDetail from "./components/Products/ProductDetail";
import { GlobalStyle } from "./app.styled";
import {Switch, Route, useLocation} from "react-router-dom"
import {AnimatePresence} from "framer-motion"
import Products from "./components/Products/Products";

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

      </Switch>
    </AnimatePresence>
    </>
  );
}

export default App;
