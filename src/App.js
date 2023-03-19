import Home from './pages/Home';
import './App.css';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/products'>
          <ProductList />
        </Route>
        <Route path='/cart'>
          <Cart/>
        </Route>
        <Route path='/register'>
          <Register/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
      </Switch>
    </Router>
  )

}

export default App;
