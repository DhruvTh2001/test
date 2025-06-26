
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './styles/custom.css'
import Login from './pages/Login'  ;
import Registration from './pages/Registration' ;
import Chatbot_information from './pages/Chatbot_information';
import Document_management from "./pages/Document_management";
import Dashboard from "./pages/Dashboard";
import Dashboard_page from "./pages/Dashboard_page"; 
import ChatWindow from "./pages/ChatWindow";
import ForgotPassword from './pages/ForgotPassword';

 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
     
    <BrowserRouter>
       <Routes>
        <Route path="" element={<Login/>} />
         <Route path="/login" element={<Login/>} />
          <Route path="/reg" element={<Registration/>} />
          <Route path="/chatbot-info" element={<Chatbot_information/>} />
          <Route path="/doc-management" element={<Document_management/>} /> 
          <Route path="/dashboard" element={<Dashboard/>} /> 
          <Route path="/dashboard-page" element={<Dashboard_page/>} /> 
          <Route path="/chat" element={<ChatWindow/>} /> 
          <Route path="/document-management" element={<Document_management />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
            
          
       </Routes>
     </BrowserRouter>
     {/*
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more testf
      </p>
      */}
    </>
  )
}

export default App
