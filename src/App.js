
import { useState } from 'react';
import './App.css';
import NewFeaturesComponent from './Components/NewFeaturesComponent';
import NewFeaturesTwo from './Components/NewFeaturesTwo';
import WhatsNewUsingPhone from './Components/WhatsNewUsingPhone';
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  const [token, setToken] = useState("");
  return (

    <>
      {/* {token && ( */}

      <Routes>
        <Route path='/' element={<NewFeaturesComponent />} />
        <Route path='/two' element={<NewFeaturesTwo />} />
        <Route path='/three' element={<WhatsNewUsingPhone />} />
      </Routes>
      {/* )} */}
      {/* {!token && (
        <Route path='/' element={<Navigate to="/signin" replace />} />
        <Route path='/signin' element = {<SignInComponent  setToken={setToken} />} />
      )} */}
    </>
  );
}

export default App;
