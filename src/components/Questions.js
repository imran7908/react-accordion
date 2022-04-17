import React from 'react'
import questions from './data'
import Question from './Question';
import './styles.css'

const Questions = () => {
  return (
    <>
      {questions.map((question) => {
        return (
          <Question key={question.id} {...question} />
        );
      })}
    </>
  )
}

export default Questions