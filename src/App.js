import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Home, Play } from './components'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/play" component={Play} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
