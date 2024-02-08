import React, { useState } from 'react'
import './App.css'
import QuoteComponent from './components/QuotePost/QuotePost'
import PostList from './components/PostList/PostList'
import TodoList from './components/TodoList/TodoList'

 const App = () => {

  return (
    <QuoteComponent />
  )
}

//Создать коппонент
// импортировать цитаты из файла
// добавить цитаты в состояние
// создатиь функцию, которая будет выбирать рандомную цитату
// занести ее в состояние
// отобржать цитату на странице
// при нажатии на кнопку отрабатывает функция и меняет цитату
//  const App = () => {

//   const quotes = [
//     {
//       id: 1,
//       text: 'The only way to do great work is to love what you do.',
//       author: 'Steve Jobs',
//     },
//     {
//       id: 2,
//       text: 'Success is not final, failure is not fatal: It is the courage to continue that counts.',
//       author: 'Winston Churchill',
//     },
//     {
//       id: 3,
//       text: "Your time is limited, don't waste it living someone else's life.",
//       author: 'Steve Jobs',
//     },
//     {
//       id: 4,
//       text: "In three words I can sum up everything I've learned about life: it goes on.",
//       author: 'Robert Frost',
//     },
//     {
//       id: 5,
//       text: 'The future belongs to those who believe in the beauty of their dreams.',
//       author: 'Eleanor Roosevelt',
//     },
//     {
//       id: 6,
//       text: 'The only limit to our realization of tomorrow will be our doubts of today.',
//       author: 'Franklin D. Roosevelt',
//     },
//     {
//       id: 7,
//       text: 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.',
//       author: 'Ralph Waldo Emerson',
//     },
//     {
//       id: 8,
//       text: 'Strive not to be a success, but rather to be of value.',
//       author: 'Albert Einstein',
//     },
//     {
//       id: 9,
//       text: "Don't watch the clock; do what it does. Keep going.",
//       author: 'Sam Levenson',
//     },
//     {
//       id: 10,
//       text: 'The best way to predict the future is to create it.',
//       author: 'Peter Drucker',
//     },
//   ]
  
//   const [selected, setSelected] = useState(0)

//   const randomIndex = () => Math.floor(Math.random() * quotes.length)
//   const randomQuote = () => setSelected(randomIndex())
  
//   const Button = (props) => {
//     return(
//       <button onClick={props.handleClick}>
//         {props.text}
//       </button>
//     )
//   }


//   return (
//     <div>
//       <p>{quotes[selected]}</p>
//       <Button handleClick={randomQuote} text= "другая цитата" />
//     </div>
// )}




 export default App