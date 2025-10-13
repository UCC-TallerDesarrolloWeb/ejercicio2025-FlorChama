import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/index.css'
import Login from './login.jsx';
import Layout from './Layout.jsx';
import Home from './Home.jsx';
import Activities from './Activities.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Layout /> } >
          <Route index element={ <Home />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/activities" element={<Activities />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
