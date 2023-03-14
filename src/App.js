import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App"> 
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
      </head>
      <header className="App-header">
          <nav className="navbar navbar-expand-lg bg-light mynavbar">
            <div className="container-fluid">
              <a className="navbar-brand" href="#"><img src="../LOGO.png" className="logo"></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-evenly" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item"><a className="nav-link active" aria-current="page" href="../index.html">Inicio</a></li>
                  <li className="nav-item"><a className="nav-link" href="contacto.html">Contacto</a></li>
                  <li className="nav-item"><a className="nav-link" href="fechas.html">Fechas</a></li>
                  <li className="nav-item"><a className="nav-link" href="merch.html">Merch</a></li>
                  <li className="nav-item"><a className="nav-link" href="reproductor.html">Reproductor</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </header>
      <main>
        <h1>Nuestra selecion de Merchandaising</h1>
        <div Name="mainmerch">
          <div>
            <img src="../img/basos.jpg" alt="imagen generica merch">
            <p> nuestros basos de plastico translucidos vienen en dos modelos " Van " y " Patente " y son completamente re-utilizables. si lo queres podes solicitarlo en la pagina de <a href="contacto.html">CONTACTO</a> especificando el modelo y retirarlo en nuestro proximo show </p>
          </div>
          <div>
            <img src="../img/remeras.jpg" alt="imagen generica merch" > 
              <p> nuetras remeras vienen con tres logos, logo general patante o dejalo en rojo, las remeras vienen en color blanco o negro y son de  completamente de algodon podes solicitarlo en la pagina de <a href="contacto.html">CONTACTO</a> especificando :modelo , talle  y color para luego retirarlo en nuestro proximo show </p>
          </div>
          <div>
            <img src="../img/remeras2.jpg" alt="imagen generica merch" > 
            <p> nuetras remeras vienen con tres logos, logo general patante o dejalo en rojo, las remeras vienen en color blanco o negro y son de  completamente de algodon podes solicitarlo en la pagina de <a href="contacto.html">CONTACTO</a> especificando :modelo , talle  y color para luego retirarlo en nuestro proximo show.</p>
          </div>
          <div>
            <img src="../img/remeras.jpg" alt="imagen generica merch" > 
            <p> Tenemos una variedad de stiker tematicos para comprar en nuestros shows </p>
          </div>
        </div>  
      </main>
    </div>
  );
}

export default App;
