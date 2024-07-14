import { Routes, Route } from 'react-router-dom';
import './App.css';
import IntroView from './views/IntroView/IntroView';
import Login from './components/Login/login';
import SignUp from './components/Signup/Signup';
import Forgot from './components/ForgotPassword/Forgot';
import HomeView from './views/HomeView/HomeView';
import DashBoardlayout from './layouts/DashBoardLayout';
import Statement from './components/Statement/Statement';
import Chart from './components/chart/chart';
import TotNghiep from './components/diemThiTotNghiep/totNghiep';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/forgotpassword' element={<Forgot/>}/>
        <Route index  element={<IntroView/>}/>
        <Route  path='/home' element={<HomeView/>}>
            <Route index element={<DashBoardlayout/>} />
            <Route path='statement' element={<Statement/>} />
            <Route path='chart' element={<Chart/>} />
            <Route path='diemthi' element={<TotNghiep/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
