import './App.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import NavBar from './componentes/navbar/navbar';
import Catalogo from "./componentes/catalogo.js"
import Inicio from "./inicio";
import Remeras from "./remeras";
import Basos from "./basos";
import Error from "./error";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
      
      
        <Routes>
          <Route path="/" exact element={<Inicio/>}/>
          <Route path="/remeras" exact element={<Remeras/>}/>
          <Route path="/basos" exact element={<Basos/>}/>
          <Route path="/error" exact element={<Error/>}/>
        </Routes>
      
      
      <h1>hola </h1>
      <Catalogo/>
      </BrowserRouter>
      
      



      
    </div>
  );
}

export default App;

/*

  
*/