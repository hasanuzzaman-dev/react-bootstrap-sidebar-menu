import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/pages/Dashboard';
import Home from './components/pages/Home';
import MySidebar from './components/sidebar/MySidebar';

function App() {
  return (
    <BrowserRouter>

    
        <Routes>
          <Route path='/' element={<MySidebar />} />
          <Route path='/home' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
     


    </BrowserRouter>
  );
}

export default App;
