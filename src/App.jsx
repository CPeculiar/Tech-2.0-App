import React, { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import Landing from './Pages/Landing';
import ErrorPage from './Pages/ErrorPage';
import SignUp from './Pages/Auth/Signup';
import Login from './Pages/Auth/Login';
import Dashboard from './Pages/Main/Dashboard';
import Account from './Pages/Accounts/Account';

export const UserContext=createContext()
function App() {
  const [logedInUser, setLogedInUser ] = useState({})
  return (
    <UserContext.Provider value={{logedInUser, setLogedInUser}}>
      <BrowserRouter>
        <Routes>

            <Route path="/" element={<Landing />} />   

            <Route path="*" element={<ErrorPage />} />        

            {/* auth */}
            <Route path="/signup" element={<SignUp />} />        
            <Route path="/login" element={<Login />} />    

            {/* main */}
            <Route path="/dashboard" element={<Dashboard />} />    

        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
} 

export default App;







    {/*<BrowserRouter>
       <Navbar />  
     <Dashboard />
      {/* <Routes> 
      </Routes> <Route path="/" element={<Navigate to="/welcome"/>} */}
  {/* <Route path="/welcome" element={<WelcomePage />}/>  
     <Route path="/Services" element={<Services/>}/>
     <Route path="/Dashboard" element={<Dashboard/>}/>  
    </BrowserRouter> */}



{/* <li className='sidebar-list-item'>
  <Link onClick={() => setActive(<Component2 />)}>
    <BsFillArchiveFill className='icon' /> Products
  </Link>
</li>
<li className='sidebar-list-item'>
  <Link onClick={() => setActive(<Component3 />)}>
    <BsFillGrid3X3GapFill className='icon' /> Categories
  </Link>
</li> */}