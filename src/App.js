
import {Routes, Route } from 'react-router-dom';
import './App.css';
import { UserAuthContextProvider } from './components/context/UserAuthContext';
import LoginPage from './pages/LoginPage';
import SignUp from './pages/SignUp';
import Home from './pages/Home'
import Create from './components/create/Create';
import ViewPost from './pages/ViewPost';
import { PostContextProvider } from './components/store/PostContext';

function App() {
  return (
     <>
       <UserAuthContextProvider>
         <PostContextProvider>
           <Routes>   
             <Route path='/' element={<Home/>}/>
             <Route path='/viewpost' element={<ViewPost/>}/>   
             <Route path='/login' element={<LoginPage/>}/>
             <Route path='/signup' element={<SignUp/>}/>
             <Route path='/create' element={<Create/>}/>
           </Routes> 
         </PostContextProvider>
       </UserAuthContextProvider>
     </>
  );
 }
 

export default App;
