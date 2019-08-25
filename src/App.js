import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Home from "./containers/Home"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container pb-5">
          <Home />
        </div>
      </div>
    )
  }
}

export default App
