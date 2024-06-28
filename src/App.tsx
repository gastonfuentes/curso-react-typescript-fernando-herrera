import Counter from './components/Counter';
import { CounterReducer } from './components/CounterReducer';
import { Formulario } from './components/Formulario';
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

      <h2>useReducer</h2>
      <hr />
      <CounterReducer />

      <h2>Custom hook</h2>
      <hr />
      <Formulario />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

    </>
  );
}

export default App;
