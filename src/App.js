import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
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
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Products">
          <Products />
        </Route>
      </Switch>
    </AnimatePresence>
    </>
  );
}

export default App;
