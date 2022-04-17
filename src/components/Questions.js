import React from 'react'
import questions from './data'
import Question from './Question';

const Questions = () => {
  return (
    <div className='container'>
      {questions.map((question) => {
        return (
          <Question key={question.id} {...question} />
        );
      })}
    </div>
  )
}

export default Questions