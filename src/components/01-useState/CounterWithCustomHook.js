import { useCounter } from '../../hooks/useCounter';

import './counter.css'

export const CounterWithCustomHook = () => {

  const { state, increment, decrement, reset } = useCounter(100);

  return (
    <>
      <h1>Counter with Hook: {state}</h1>
      <hr/>
      <buton onClick={() => increment(2)} className="btn">+1</buton>
      <buton onClick={reset} className="btn">Reset</buton>
      <buton onClick={() => decrement()} className="btn">-1</buton>
    </>
  )
}
