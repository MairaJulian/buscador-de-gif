import './App.css';
import ListaGif from './components/ListaGif';
import {Link, Route} from 'wouter'
import Home from './pages/Home';
import Detail from './pages/Detail';
import Context from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';
//el contexto tiene un proveedor y un consumidor

function App() {
  
  return (
    <Context.Provider value={{name: 'maira', creandoMiPage: true}}> 
      {/* todos los elementos que estan por debajo tienen acceso a ese proveedor */}
      <div className='App'>
        <section className='App-content'>
          <header className='cabecera'>
            <Link className='titulo' to='/'>Giffy</Link>
          </header>
        <GifsContextProvider>
          <Route path='/' component={Home}></Route>
          <Route path='/search/:keyword' component={ListaGif}></Route>
          <Route path='/gif/:id' component={Detail}></Route>
        </GifsContextProvider>
        </section>
      </div>

    </Context.Provider>

  );
}

export default App;
