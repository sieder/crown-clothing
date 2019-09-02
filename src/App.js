import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'

import HomePage from './pages/homepage/homepage.components'

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
    
  </div>
)

const TopicDetails = ( props ) => {
  console.log(props)
  console.log(props.match.params.topicID)
  return (
    <div>
      <h1>Topic Details</h1>
      {
        props.match.params.topicID === "1" ? <h1>{props.match.params.topicID}</h1> : <h1>NONE</h1> 
      }
      <button onClick={() => props.history.push('/')}>back</button>
    </div>
  )
}

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route path='/hats' component={HatsPage} />
      <Route path='/topicdetails/:topicID' component={TopicDetails} />
    </div>
  )
}

export default App;
