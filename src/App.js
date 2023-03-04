import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './components/Books';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        {/* <Route path="Calculator" element={<Calculator />} />
        <Route path="Quote" element={<Quote />} /> */}
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
