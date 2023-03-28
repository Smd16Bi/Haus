import './resets.css';
import './base.css';
import Header from './components/header/header';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import Home from './components/main/HomePage/home';
import Cart from './components/section/Cart/cart';
import Ourstory from './components/main/Ourstory/Ourstory';





const App = ({state,dispatch}) => {
  return (
    <BrowserRouter>
      <div className='app_wrapper'>
        <Header state={state.header} counter={state.cart}/>
        <main className='main'>
          <Routes>
            <Route path="/" element={<Home state={state.section} products={state.products} dispatch={dispatch}/>} />
            <Route path="/our-story" element={<Ourstory state={state.section}/>} />
            <Route path="/cart" element={<Cart state={state.cart} dispatch={dispatch}/>} />
          </Routes>
        </main>
        <footer className="footer"></footer>
      </div>
    </BrowserRouter>
  )
}

export default App;
