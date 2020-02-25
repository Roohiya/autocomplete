import React from 'react'
import ReactDOM from 'react-dom'
import Autocomplete from './Autocomplete'

function App () {
  return (
    <div>
      <h1>React Autocomplete Demo</h1>
      <h2>Start typing and experience the autocomplete wizardry!</h2>
      <Autocomplete
        suggestions={[
          'Alligator',
          'Bask',
          'Crocodilian',
          'Death Roll',
          'Eggs',
          'Jaws',
          'Reptile',
          'Solitary',
          'Tail',
          'Wetlands'
        ]}
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
