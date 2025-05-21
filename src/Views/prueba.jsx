import { create } from 'zustand'


function Counter() {
  
  return (
    <div>
      <span>{count?'si':'no'}</span>
      <button onClick={inc}>one up</button>
    </div>
  )
}
export {Counter}