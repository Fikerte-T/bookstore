// import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Books from './Books';
import Categories from './Categories';
import Navbar from './Navbar';
import store from '../redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Books />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </Switch>
    </Provider>
  );
}

export default App;
