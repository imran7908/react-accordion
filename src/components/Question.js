import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import './styles.css'

const Question = ({ id, title, info }) => {
    const [answer, setAnswer] = useState(false);
  return (
    <article className='QandA'>
        <header>
            <h4>{title}</h4>
            <button onClick={() => setAnswer(!answer)} className='btn'>
                {answer ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
        </header>
        {answer ? <p>{info}</p> : ''}
    </article>
  )
}

export default Question