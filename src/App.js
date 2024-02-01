
import {Routes, Route } from 'react-router-dom';
import './App.css';
import { UserAuthContextProvider } from './components/context/UserAuthContext';
import LoginPage from './pages/LoginPage';
import SignUp from './pages/SignUp';
import Home from './pages/Home'
import Create from './components/create/Create';

function App() {
  return (
    <>
    <UserAuthContextProvider>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/create' element={<Create/>}/>
      </Routes> 
      </UserAuthContextProvider>
         
    </>
  );
}

export default App;
