import './App.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import NavBar from './componentes/navbar';
import ItemListContainer from "./componentes/ItemListContainer"
import ItemDetailContainer from "./componentes/ItemDetailContainer"
//import Cart from "./componentes/Cart";
import CartProvider from './componentes/CartContext';
import Error from "./error";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <Routes>
          <Route path="/" exact element={<ItemListContainer/>}/>
          <Route path="/category/:categoryid" exact element={<ItemListContainer/>}/>
          <Route path="/item/:id" exact element={<ItemDetailContainer/>}/>
          <Route path="*" exact element={<Error/>}/>
        </Routes>   
        </CartProvider>
      </BrowserRouter> 
    </div>
  );
}
export default App;


/*

 
      <Route path='/cart' element={<Cart/>}/>
 
*/