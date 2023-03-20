import './resets.css';
import './base.css';
import Header from './components/header/header';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import Home from './components/main/HomePage/home';



const App = ({state}) => {
  return (
    <BrowserRouter>
      <div className='app_wrapper'>
        <Header state={state.header} />
        <main className='main'>
          <Routes>
            <Route path="/" element={<Home state={state.section} products={state.products}/>} />
            <Route path="" element />
            <Route path="" element />
            <Route path="" element />
            <Route path="" element />
          </Routes>
        </main>
        <footer className="footer"></footer>
      </div>
    </BrowserRouter>
  )
}

export default App;
