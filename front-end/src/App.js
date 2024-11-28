import logo from './logo.svg';
import './App.css';
import { RouteProvider } from './uti;ity/context/RouterContext';
import Router from './router/Router';

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <RouteProvider>
        <Router />
      </RouteProvider>
    </>
  );
}

export default App;
