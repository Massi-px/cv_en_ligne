import logo from './assets/img/logo.png';
import './assets/css/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <ul className="App-menu">
              <li className="App-onglet">
                  <a href="accueil.html">Accueil</a>
              </li>
              <li className="App-onglet">
                  <a href="films.html">Compétence</a>
              </li>
              <li className="App-onglet">
                  <a href="musiques.html">Expérience</a>
              </li>
              <li className="App-onglet">
                  <a href="musiques.html">Hobbie</a>
              </li>
          </ul>
      </header>

      <body className="App-body">

      </body>

    </div>
  );
}

export default App;
