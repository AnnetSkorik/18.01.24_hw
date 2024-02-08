import  { useState } from 'react';
import {quotes} from '../../utils/quotes'

const QuoteComponent = () => {
  const [selected, setSelected] = useState(quotes)

  const randomQuote = () => {
    const randomIndex = () => Math.floor(Math.random() * quotes.length)
    // setSelected(quotes[randomIndex])
  }

  return (
    <div>
<h1>Random Quote Generator</h1>
      {/* <p>{quotes[selected]}</p> */}
      <button onClick={randomQuote}>Получить рандомную цитату</button>
       {selected && (
        <div>
          <p>{selected.text}</p>
          <p> {selected.author}</p>
        </div>
      )}
    </div>
  )};

export default QuoteComponent
