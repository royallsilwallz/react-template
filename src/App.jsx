import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './views/Home';
import Expenses from './views/Expenses';
import Invoices from './views/Invoices';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to="/">Home</Link> | <Link to="/invoices">Invoices</Link> |{' '}
        <Link to="/expenses">Expenses</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
