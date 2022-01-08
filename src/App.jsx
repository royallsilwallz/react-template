import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Expenses from './views/Expenses';
import Invoices from './views/Invoices';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} />
      </Routes>
    </BrowserRouter>
  );
}
