import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/login';
import Register from './pages/Register';
function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path  = '/' element = {<HomePage/>} /> 
      <Route  path = '/login' element = {<Login/>} />
      <Route path  = '/register' element = {<Register/>} /> 

    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
