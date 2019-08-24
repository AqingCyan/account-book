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
  padLeft,
  LIST_VIEW,
  CHART_VIEW,
  TYPE_INCOME,
  TYPE_OUTCOME,
  parseToYearMonth
} from "../util/utility"

// 拆分数据结构，避免 category 冗余
export const categorys = {
  "1": {
    id: "1",
    name: "旅行",
    type: "outcome",
    iconName: "ios-plane"
  },
  "2": {
    id: "2",
    name: "工资",
    type: "income",
    iconName: "logo-yen"
  }
}

export const items = [
  {
    id: 1,
    title: "去北京旅游",
    price: 200,
    date: "2019-08-21",
    cid: "1"
  },
  {
    id: 2,
    title: "发工资",
    price: 300,
    date: "2019-08-21",
    cid: "2"
  },
  {
    id: 3,
    title: "去西安旅游",
    price: 300,
    date: "2019-09-21",
    cid: "1"
  }
]

const newItem = {
  id: 4,
  title: "新的项目",
  price: 300,
  date: "2019-08-21",
  cid: "1"
}

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items,
      currentDate: parseToYearMonth(),
      tabView: LIST_VIEW
    }
  }

  // 切换tab
  changeView = view => {
    this.setState({
      tabView: view
    })
  }

  // 修改时间
  changeDate = (year, month) => {
    this.setState({
      currentDate: { year, month }
    })
  }

  // 编辑账单条目
  modifyItem = modifiedItem => {
    const modifiedItems = this.state.items.map(item => {
      if (item.id === modifiedItem.id) {
        return { ...item, title: "更新后的标题" }
      } else {
        return item
      }
    })
    this.setState({
      items: modifiedItems
    })
  }

  // 创建账目
  createItem = () => {
    this.setState({
      items: [newItem, ...this.state.items]
    })
  }

  // 删除账目
  deleteItem = deletedItem => {
    const filteredItem = this.state.items.filter(
      item => item.id !== deletedItem.id
    )
    this.setState({
      items: filteredItem
    })
  }

  render() {
    const { items, currentDate, tabView } = this.state
    // 把拆分的 category 数据结构合并在一起
    const itemsWithCategory = items
      .map(item => {
        item.category = categorys[item.cid]
        return item
      })
      .filter(item => {
        // 切换月份过滤掉不是本月的数据
        return item.date.includes(
          `${currentDate.year}-${padLeft(currentDate.month)}`
        )
      })

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
              <MonthPicker
                year={currentDate.year}
                month={currentDate.month}
                onChange={this.changeDate}
              />
            </div>
            <div className="col">
              <TotalPrice income={totalIncome} outcome={totalOutcome} />
            </div>
          </div>
        </header>
        <div className="content-area py-3 px-3">
          <ViewTab activeTab={tabView} onTabChange={this.changeView} />
          <CreateBtn onClick={this.createItem} />
          {tabView === LIST_VIEW && (
            <PriceList
              items={itemsWithCategory}
              onModifyItem={this.modifyItem}
              onDeleteItem={this.deleteItem}
            />
          )}
          {tabView === CHART_VIEW && <h1> 这里是图表模式📈</h1>}
        </div>
      </Fragment>
    )
  }
}

export default Home
