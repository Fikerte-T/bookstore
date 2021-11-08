import './App.css';
import { Route, Switch } from 'react-router-dom';
import Books from "./components/books"
import Categories from './components/categories';
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Books />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
