import React, { useState } from 'react'

const Question = ({ id, title, info }) => {
    const [answer, setAnswer] = useState(false);
  return (
    <article className='content'>
        {title}
        {answer ? <button onClick={() => setAnswer(!answer)}>-</button> : <button onClick={() => setAnswer(!answer)}>+</button>}
        {answer ? <p>{info}</p> : ''}
    </article>
  )
}

export default Question