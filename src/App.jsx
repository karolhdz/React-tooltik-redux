
import logo from './logo.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByNumber } from './store/slices/counter/counterSlice';

function App() {

  const {counter} = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>count is: {counter}</p>
        <p>
          <button type="button" onClick={() => dispatch( increment() )}>
              increment
          </button>
          <button type="button" onClick={() => dispatch( decrement() )}>
              decrement
          </button>
          <button type="button" onClick={() => dispatch( incrementByNumber(2) )}>
              increment  by 2
          </button>
        </p>
      </header>
    </div>
  )
}

export default App
