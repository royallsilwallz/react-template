import { Outlet, Link } from 'react-router-dom';
import Counter from '../../components/Counter';

export default function Home() {
  return (
    <div>
      <div>
        <h1>Bookkeeper</h1>
        <nav
          style={{
            borderBottom: 'solid 1px',
            paddingBottom: '1rem',
          }}
        >
          <Link to="/invoices">Invoices</Link> |{' '}
          <Link to="/expenses">Expenses</Link>
        </nav>
        <Outlet />
      </div>

      <Counter />
    </div>
  );
}
