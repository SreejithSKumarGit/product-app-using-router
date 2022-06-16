import './App.css';
import {Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';


function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
      <Route path='/products/:id' element={<ProductDetails/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
