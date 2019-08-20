import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import PriceList from "./components/PriceList";

const items = [
  {
    "id": 1,
    "title": "去北京旅游",
    "price": 200,
    "date": "2019-08-21",
    "category": {
      "id": "1",
      "name": "旅行",
      "type": "outcome"
    }
  },
  {
    "id": 2,
    "title": "去北京旅游",
    "price": 300,
    "date": "2019-08-21",
    "category": {
      "id": "1",
      "name": "旅行",
      "type": "outcome"
    }
  }
];

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <PriceList
          items={items}
          onModifyItem={(item) => {alert(item.id)}}
          onDeleteItem={(item) => {alert(item.id)}}/>
      </div>
    )
  }
}

export default App;
