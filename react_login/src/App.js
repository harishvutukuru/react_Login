
import './App.css';
import Login from './Login';
import Registration from './Registration'

import { Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div >
      <Routes>
        <Route path='registration' element={<Registration />}></Route>
        <Route path='/' element={<Login />}></Route>
        <Route path='/Login' element={<Login />}></Route>
      </Routes>
   {/* <Login/> */}
    </div>
  );
}

export default App;
