import { useState } from 'react'
import './App.css'

// function App() {
//   let [num, setNum] = useState(0)
//   function addNum() {
//     setNum(num + 1)
//   }
//   function lessNum() {
//     if (num === 0) {
//       alert(`The value does not go below zero`)
//     } else {
//       setNum(num - 1)
//     }
//   }
//   function resetNum() {
//     if (!num===0) {
//       setNum(num=0)
//     } else {
//       alert(`number is already reset`)
//     }
//   }
//   console.log(num);

//   return (
//     <>
//     <div className="container">
//       <h1 className="counter">{num}</h1>
//       <div className="button-group">
//         <button className="btn" onClick={addNum}>Add</button>
//         <button className="btn" onClick={lessNum}>Less</button>
//         <button className="btn reset" onClick={resetNum}>Reset</button>
//       </div>
//     </div>
//     </>
//   )
// }

function App() {
  let [num, setNum] = useState(0)
  function add() {
    setNum(num + 1)
    // console.log(num);

  }
  function less() {
    setNum(num - 1)
    // console.log(num);
  }
  function reset() {
    setNum(num = 0)
    
  }
  console.log(num);
  return (
    <>
      <h1>{num}</h1>
      <button onClick={add}>add</button>
      <button onClick={less}>less</button>
      <button onClick={reset}>reset</button>
    </>
  )
}

export default App
