'use client';

import { useUserContext } from '@/context/userContext';

export default function Home() {
  const { state, setState } = useUserContext();

  console.log(state)
  

  return (
    <>
    <h2>useContext</h2>
    <button onClick={() => setState({ ...state, count: state.count - 1 })}>-</button>
    <button>{state.count}</button>
    <button onClick={() => setState({ ...state, count: state.count + 1 })}>+</button>
    

    
    </>
  )
}
