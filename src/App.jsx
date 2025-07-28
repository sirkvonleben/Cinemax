import logo from './logo.svg';
import './styles/App.module.css';
import { useRoutes } from 'react-router-dom';
import routes from './appRoutes';

  

function App() {
const routing = useRoutes(routes);
<Suspense fallback={<div>Cargando...</div>}>
  return routing(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>

  );
</Suspense>
}

export default App;
