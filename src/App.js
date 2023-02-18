import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import MySidebar from './components/sidebar/MySidebar';

function App() {
  return (
    <BrowserRouter>
   
      <Routes>
        <Route path='/' element={<MySidebar />} />
      </Routes>


    </BrowserRouter>
  );
}

export default App;
