import Counter from './components/Counter';
import { TimerPadre } from './components/TimerPadre';
import Usuario from './components/Usuario';

function App() {
  return (
    <>
      <h1>react mas typescript</h1>
      <hr />
      <Counter />
      <Usuario />

      <h2>useEffect - useRef</h2>
      <hr />
      <TimerPadre />
    </>
  );
}

export default App;
