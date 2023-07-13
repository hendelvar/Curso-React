import logo from './logo.svg';
import './App.css';
import ComponenteA from './Components/componenteA';

function App() {

  const contactoPrueba = {
    nombre: 'Henry',
    apellido: 'Delgadillo',
    email: 'hendelvar@gmail.com',
    conectado: false
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponenteA contacto={contactoPrueba}></ComponenteA>
      </header>
    </div>
  );
}

export default App;
