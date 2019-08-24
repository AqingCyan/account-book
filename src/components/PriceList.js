import React from "react"
import Ionicon from "react-ionicons"
import PropTypes from "prop-types"

const PriceList = ({ items, onModifyItem, onDeleteItem }) => {
  return (
    <ul className="list-group list-group-flush">
      {items.map(item => (
        <li
          className="list-group-item d-flex justify-content-between align-items-center"
          key={item.id}
        >
          <span className="col-1">
            <Ionicon
              className="rounded-circle"
              fontSize="30px"
              style={{ backgroundColor: "#007bff", padding: "5px" }}
              color={"#ffffff"}
              icon={item.category.iconName}
            />
          </span>
          <span className="col-5">{item.title}</span>
          <span className="col-2 font-weight-bold">
            {item.category.type === "income" ? "+" : "-"}
            {item.price}元
          </span>
          <span className="col-2">{item.date}</span>
          <a
            href={'#'}
            className="col-1"
            // 这样写可以绑定 this 到组件
            onClick={() => {
              onModifyItem(item)
            }}
          >
            <Ionicon
              className="rounded-circle"
              fontSize="30px"
              style={{ backgroundColor: "#28a754", padding: "5px" }}
              color={"#ffffff"}
              icon="ios-create-outline"
            />
          </a>
          <span
            className="col-1"
            onClick={() => {
              onDeleteItem(item)
            }}
          >
            <Ionicon
              className="rounded-circle"
              fontSize="30px"
              style={{ backgroundColor: "#dc3545", padding: "5px" }}
              color={"#ffffff"}
              icon="ios-close"
            />
          </span>
        </li>
      ))}
    </ul>
  )
}

// props 类型检查
PriceList.propTypes = {
  items: PropTypes.array.isRequired,
  onModifyItem: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired
}

// props 默认值设置
PriceList.defaultProps = {
  onModifyItem: () => {}
}
export default PriceList
