import './App.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import NavBar from './componentes/navbar/navbar';
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
import Error from "./error";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" exact element={<ItemListContainer/>}/>
          <Route path="/category/:id" exact element={<ItemListContainer/>}/>
          <Route path="/item/:id" exact element={<ItemDetailContainer/>}/>
          <Route path="*" exact element={<Error/>}/>
        </Routes>   
      </BrowserRouter> 
    </div>
  );
}
export default App;