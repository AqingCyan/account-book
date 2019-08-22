import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import Ionicon from "react-ionicons"
import logo from "../logo.svg"
import PriceList from "../components/PriceList"
import ViewTab from "../components/ViewTab"
import TotalPrice from "../components/TotalPrice"
import MonthPicker from "../components/MonthPicker"
import CreateBtn from "../components/CreateBtn"
import {
  LIST_VIEW,
  CHART_VIEW,
  TYPE_INCOME,
  TYPE_OUTCOME
} from "../util/utility"

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

class Home extends Component {
  render() {
    let totalIncome = 0
    let totalOutcome = 0
    items.forEach(item => {
      if (item.category.type === TYPE_OUTCOME) {
        totalOutcome += item.price
      } else {
        totalIncome += item.price
      }
    })
    return (
      <Fragment>
        <header className="App-header">
          <div className="row mb-5">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="row">
            <div className="col">
              <MonthPicker year={2019} month={8} onChange={() => {}} />
            </div>
            <div className="col">
              <TotalPrice income={totalIncome} outcome={totalOutcome} />
            </div>
          </div>
        </header>
        <div className="content-area py-3 px-3">
          <ViewTab activeTab={LIST_VIEW} onTabChange={() => {}} />
          <CreateBtn onClick={() => {}}/>
          <PriceList items={items} onModifyItem={() => {}} onDeleteItem={() => {}}/>
        </div>
      </Fragment>
    )
  }
}

export default Home
