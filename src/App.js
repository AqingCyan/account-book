import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Home from "./containers/Home"

const items = [
  {
    id: 1,
    title: "去北京旅游",
    price: 200,
    date: "2019-08-21",
    category: {
      id: "1",
      name: "旅行",
      type: "outcome",
      iconName: "ios-plane"
    }
  },
  {
    id: 2,
    title: "去北京旅游",
    price: 300,
    date: "2019-08-21",
    category: {
      id: "1",
      name: "旅行",
      type: "outcome",
      iconName: "ios-plane"
    }
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    )
  }
}

export default App
