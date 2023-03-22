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




const App = ({state,dispatch}) => {
  return (
    <BrowserRouter>
      <div className='app_wrapper'>
        <Header state={state.header} />
        <main className='main'>
          <Routes>
            <Route path="/" element={<Home state={state.section} products={state.products} dispatch={dispatch}/>} />
            <Route path="" element />
            <Route path="" element />
            <Route path="" element />
            <Route path="/cart" element={<Cart state={state.cart} dispatch={dispatch}/>} />
          </Routes>
        </main>
        <footer className="footer"></footer>
      </div>
    </BrowserRouter>
  )
}

export default App;
