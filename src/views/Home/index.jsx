import Counter from '../../components/Counter';
import User from '../../components/User';

function Home() {
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold underline">Hello Tailwind!</h1>
      </div>

      <Counter />

      <User />
    </div>
  );
}

export default Home;
