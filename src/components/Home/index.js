import React from 'react'
import Header from '../Header'
import Levels from '../Levels'
import ProgressBar from '../ProgressBar'

const Home = () => {

  

  return (
    <div>
      <Header/>
      <Levels/>
      <ProgressBar/>

      <h2>Our Questions Quiz</h2>
      <p className='answerOptions'>Question 1</p>
      <p className='answerOptions'>Question 2</p>
      <p className='answerOptions'>Question 3</p>
      <p className='answerOptions'>Question 4</p>
      <button className='btnSubmit'>Next</button>
    </div>
  )
}

export default Home