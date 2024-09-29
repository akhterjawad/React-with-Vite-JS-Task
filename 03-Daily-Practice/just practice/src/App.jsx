// import axios from 'axios'
// import React , { useRef, useState, useEffect } from 'react'
// import './App.css'



// let App = () => {
//     let [todo, setTodo] = useState([])
//     let inputV = useRef()
//     function addTodo(event) {
//         event.preventDefault()
//         todo.push(inputV.current.value)
//         setTodo([...todo])
//         console.log(todo);
//         console.log(inputV.current.value);
//         inputV.current.value = ``
//     }
//     function deleteTodo(i) {
//         todo.splice(i, 1)
//         setTodo([...todo])
//     }
//     return (
//         <>
//             <form onSubmit={addTodo}>
//                 <input type="text" ref={inputV} />
//                 <button type='submit' >add</button>
//             </form>
//             <ul>
//                 {todo.map((item, index) => (
//                     <div key={index}>
//                         <li>{item}</li>
//                         <button onClick={() => deleteTodo(index)}>delete</button>
//                         {/* <button onClick={edit}>editd</button> */}
//                     </div>
//                 ))}
//             </ul>
//         </>
//     )
// }



// const App = () => {
//     let [count, setcount]= useState(0)
//     function addCounter() {
//         setcount(count += 1)
//         setcount(count += 1)
//         setcount(count += 1)
//         setcount(count += 1)
//     }
//     return (
//         <>
//         <h1>{count}</h1>
// <button onClick={addCounter}>add </button>
//         </>
//     )
// }

// const App = () => {
//   return (
//     <>
//       <Navbar/>
//     </>
//   )
// }

// const App = () => {
//   let [count, setcount] = useState(0)
//   function add() {

//     // agar aap 1 dafama 2 bar setcount ka function run karna chata ha to nicha diagay tarika sa nahi hoga
//     setcount(count + 1)
//     setcount(count + 1)


//     // agar aap 1 dafama 2 bar setcount ka function run karna chata ha to nicha diagay tarika sa hojayga but bad practice ha.
//     setcount(count += 1)
//     setcount(count += 1)


//     // agar aap 1 dafama 2 bar setcount ka function run karna chata ha to nicha diagay tarika sa hojayga or ya good practice ha.
//     setcount(prevVal => prevVal + 1);
//     setcount(prevVal => prevVal + 1);
//   }
//   return (
//     <>
//       <button onClick={add}>added {count}</button>
//     </>
//   )
// }


// const App = () => {
//   let [todo, setTodo] = useState([])
//   let inputVal = useRef()
//   function Add(event) {
//     event.preventDefault()
//     console.log(inputVal.current.value);
//     // todo.push(inputVal.current.value)
//     setTodo([...todo, inputVal.current.value])
//     inputVal.current.value = ``
//   }
//   function deleted(i) {
//     todo.splice(i, 1)
//     setTodo([...todo])
//   }
//   function edit(i) {
//     let updateVal = prompt(`.`)
//     todo.splice(i, 1, updateVal)
//     setTodo([...todo])
//   }
//   return (
//     <>
//       <form onSubmit={Add}>
//         <input type="text" ref={inputVal} />
//         <button>addTodo</button>
//       </form>
//       <ul>
//         {todo.map((item, index) => (
//           <li key={index}>{item}
//             <div>
//               <button onClick={() => deleted(index)}>deleted</button>
//               <button onClick={() => edit(index)}>edit</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </>
//   )
// }


// const App = () => {
//     const [data, setData] = useState(null);

// // Tumhari API baar baar call ho rahi hai kyunke tum getData() function ko bina kisi condition ke call kar rahe ho. Jab bhi component render hota hai ya state update hoti hai, yeh function phir se run hota hai, is wajah se API call bar bar hoti hai.

//         async function getData() {
//             const res = await fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json())
//                 .then(json => {
//                     console.log(json)
//                     setData(json);
//                 })
//         }
//         getData()



// blow code is OK

//     // useEffect(() => {
//     //     async function getData() {
//     //         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     //         const res = await response.json();
//     //         console.log(res);
//     //         setData(res);
//     //     }
//     //     getData()
//     // }, [])
//     return (
//         <>
//             {data ? data.map(item => (
//                 <h1 key={item.id}>{item.name}</h1>
//             )) : <p>loading</p>}
//         </>
//     )
// }

// export default App





// const App = () => {

//     const [data, setData] = useState(null);

// Tumhari API baar baar is liye call nahi ho rahi kyunke tum fetch() ko kisi lifecycle hook (jaise useEffect) mein nahi rakh rahe ho ya tumhara code sirf ek baar run ho raha hai jab page ya component load hota hai. Agar tum yeh code kisi function ke andar call karte ho jo continuously rerun nahi hota, toh API bhi sirf ek baar hi call hogi.

//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(json => {
//         console.log(json);
//         setData(json)
//       }).catch(err => console.log(err));


//     return (
//       <>
//         {data ? data.map((item) => {
//           return <div key={item.id}>
//             <p>{item.name}</p>
//           </div>
//         }) : <h1>Loading...</h1>}
//       </>
//     );
//   };

// export default App;

// const App = () => {
//     const [quizQuestion, setquizQuestion] = useState([])
//     const [questionIndex, setQuestionIndex] = useState(0)
//     const [choices, setChoices] = useState([])
//     const [selectedChoice, setSelectedChoice] = useState('')

//     function nextBtn() {
//         if (questionIndex < quizQuestion.length - 1) {
//             setQuestionIndex(questionIndex + 1)
//             setSelectedChoice('') // Reset selected choice for the next question
//         } else {
//             alert('All questions have been answered.')
//         }
//     }

//     useEffect(() => {
//         async function getData() {
//             let quiz = await axios('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple')
//             setquizQuestion(quiz.data.results)

//             const firstQuestion = quiz.data.results[0]
//             const allChoices = [...firstQuestion.incorrect_answers, firstQuestion.correct_answer]
//             setChoices(shuffleArray(allChoices))
//         }
//         getData()
//     }, [])

//     useEffect(() => {
//         if (quizQuestion.length > 0) {
//             const currentQuestion = quizQuestion[questionIndex]
//             const allChoices = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer]
//             setChoices(shuffleArray(allChoices))
//         }
//     }, [questionIndex, quizQuestion])

//     function shuffleArray(array) {
//         for (let i = array.length - 1; i > 0; i--) {
//             const j = Math.floor(Math.random() * (i + 1))
//                 ;[array[i], array[j]] = [array[j], array[i]]
//         }
//         return array
//     }

//     return (
//         <>
//             <div>
//                 {quizQuestion.length > 0 ? (
//                     <h1>
//                         Q{questionIndex + 1}: {quizQuestion[questionIndex].question}
//                     </h1>
//                 ) : (
//                     <h1>Loading...</h1>
//                 )}
//             </div>
//             <form>
//                 {choices.map((choice, index) => (
//                     <div key={index}>
//                         <input
//                             type="radio"
//                             id={`choice-${index}`}
//                             name="quiz"
//                             value={choice}
//                             checked={selectedChoice === choice}
//                             onChange={(e) => setSelectedChoice(e.target.value)}
//                         />
//                         <label htmlFor={`choice-${index}`}>{choice}</label>
//                     </div>
//                 ))}
//             </form>
//             <button onClick={nextBtn}>Next</button>
//         </>
//     )
// }

// // export default App
// import React, { useState, useEffect } from 'react';

// const App = () => {
//   const [age, setAge] = useState(1);

//   useEffect(() => {
//     if (age < 1) {
//       alert('age is not down blow');
//       setAge(1); // Is se age ko update kar ke re-render kar diya jaye ga bina alert ke bar bar run hone ke
//     }
//   }, [age]);

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white shadow-lg rounded-lg p-8 max-w-md mx-auto text-center space-y-6">
//         <h1 className="text-3xl font-bold text-blue-500">Gym Admission</h1>

//         <div className="space-y-4">
//           <h2 className="text-xl text-gray-700">
//             Age of guy: <span className="font-semibold text-blue-600">{age}</span>
//           </h2>

//           <div className="space-x-4">
//             <button
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all"
//               onClick={() => setAge(age + 1)}
//             >
//               Add Age
//             </button>
//             <button
//               className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-all"
//               onClick={() => setAge(age - 1)}
//             >
//               Subtract Age
//             </button>
//           </div>

//           <div className="mt-6">
//             {age < 15 ? (
//               <p className="text-red-500 font-medium">You're still a kid, dear. 😅</p>
//             ) : age >= 18 ? (
//               <p className="text-green-500 font-medium">Hey brother, where have you been? Join immediately! 💪</p>
//             ) : (
//               <p className="text-yellow-500 font-medium">
//                 You can join, but you have to pay 1000 extra. 🤑
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;
import React from 'react'
import { useState } from 'react'

const App = () => {
  let [num,setnum]=useState(null)
  function rander() {
    setnum(34)
  }
  return (
    <>
      <button onClick={rander}>show</button>
      <div>{num}</div>
    </>
  )
}

export default App
