import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import login from './pages/login';
import Register from './pages/Register';
function App() {
  return (
    <> 
      <BrowserRouter>
      <Routes>
        <Route path = '/' element  = {<Homepage/>} />
        <Route path = '/login' element = {<login/> }/> 
        <Route path ='/register' element  = {< Register/>} /> 

      </Routes>
      
      
      
      
      
      </BrowserRouter>



    </> 
  );
}

export default App;
