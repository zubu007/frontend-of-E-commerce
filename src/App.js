import Navbar from './Navbar';
import './App.css';
import Product from './ProductPage'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CartPage from './CartPage';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/product' component={(props) => <Product {...props}/>}/>
        <Route path='/cart' component={CartPage}/>
      </Switch>
      
    </Router>
  );
}

export default App;
