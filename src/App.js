import './App.css';
import Navbar from './components/navBar/navBar';
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from './components/itemList/ItemListContainer';
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer';
import {BrowserRouter, MemoryRouter, Route, Routes} from 'react-router-dom'
import Cart from './components/cart/Cart';
import CustomCartContext from './context/customContext/CustomCartContext';

function App() {

  return (
    <BrowserRouter>
      <CustomCartContext>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </CustomCartContext>
    </BrowserRouter>
  );
}

export default App;
