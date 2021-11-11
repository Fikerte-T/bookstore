// import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Bookss from './BooksComp';
import Categoriess from './CategoriesComp';
import Navbar from './Navbar';
import store from '../redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      {/* <div className="App"> */}
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Bookss />
          </Route>
          <Route path="/categories">
            <Categoriess />
          </Route>
        </Switch>
      {/* </div> */}
    </Provider>
  );
}

export default App;
