import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import DetailPokemon from "./pages/DetailPokemon";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/DetailPokemon/:id">
              <DetailPokemon />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
