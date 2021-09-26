import { Route } from "react-router";
import { Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import Products from "./pages/Products";
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/reports" component={Reports} />
        <Route path="/products" component={Products} />
      </Switch>
    </>
  );
}

export default App;
