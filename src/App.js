
import { useState } from 'react';
import './App.css';
import NewFeaturesComponent from './Components/NewFeaturesComponent';
import NewFeaturesTwo from './Components/NewFeaturesTwo';
import WhatsNewUsingPhone from './Components/WhatsNewUsingPhone';
import { Navigate, Route, Routes } from "react-router-dom";
import SearchComponent from './Components/SearchComponent';
import useToken from './hooks/useToken';

function App() {
  const [token, setToken] = useToken("");
  return (

    <>
      {/* {token && ( */}

      <Routes>
        <Route path='/' element={<NewFeaturesComponent />} />
        <Route path='/two' element={<NewFeaturesTwo />} />
        <Route path='/three' element={<WhatsNewUsingPhone />} />
        <Route path='/search' element={<SearchComponent />} />
      </Routes>
      {/* )} */}
      {/* {!token && (
        <Routes>
        <Route path='/' element={<Navigate to="/signin" replace />} />
        <Route path='/signin' element = {<SignInComponent  setToken={setToken} />} />
        <Routes />
        )} */}
    </>
  );
}

export default App;

// lets store the token into local storage or into a cookie and everytime the app loads 
// lets check the existance of token using the useToken Hook 
// it checks the availability of token into local storage and stores into the variable
// and using that variable we will decide which routes to render
// if token is not present navigate to the signin page and in signin page use the useToken method passed
// from app.js to store the value  