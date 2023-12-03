
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (<>
    <Router>
      <Navbar title="KP-Shop" />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element="About"></Route>
      </Routes>
    </Router>
  </>);
}

export default App;
