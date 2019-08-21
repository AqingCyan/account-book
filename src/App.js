import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import PriceList from "./components/PriceList"
import ViewTab from "./components/ViewTab"
import TotalPrice from "./components/TotalPrice"
import MonthPicker from "./components/MonthPicker"
import { LIST_VIEW, CHART_VIEW } from "./util/utility"

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
      <div>
        <TotalPrice income={100} outcome={300} />
        <MonthPicker year={2019} month={5}
          onChange={(year, month) => {console.log(year, month)}}/>
        <ViewTab
          activeTab={LIST_VIEW}
          onTabChange={view => {
            console.log(view)
          }}
        />
      </div>
    )
  }
}

export default App
