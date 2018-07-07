import React from "react";
import List from "../list/List";
import "./css/style.css";
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      isSelectAll: false,
      allPrice: 0
    };
  }
  // 单项选择列表
  selectItem = ind => {
    console.log(ind);
    let list = this.state.list;
    list.forEach((item, index) => {
      if (index === ind) {
        item.isChecked = !item.isChecked;
      }
    });
    this.setState(
      {
        list
      },
      () => {
        this.totalPrice();
      }
    );
  };
  // 请求数据
  componentDidMount() {
    fetch(
      "https://easy-mock.com/mock/5b3f0cb4a374a624438211ee/react_shop/react_shop.json"
    )
      .then(response => {
        return response.json();
      })
      .then(body => {
        this.setState({ list: body });
      });
  }
  // 全选
  isSelectAll = e => {
    let list = this.state.list;
    list.forEach((item, index) => {
      item.isChecked = e.target.checked;
    });
    this.setState(
      {
        isSelectAll: e.target.checked,
        list
      },
      () => {
        this.totalPrice();
      }
    );
  };
  // 计算总价
  totalPrice() {
    let list = this.state.list;
    let allPrice = 0;
    list.forEach((item, index) => {
      if (item.isChecked) {
        allPrice += item.num * item.price;
      }
    });
    this.setState({
      allPrice
    });
  }
  // 数量的计算
  changeNum = (ind, type) => {
    let list = this.state.list;
    list.forEach((item, index) => {
      if (index === ind) {
        if (type === "-") {
          if (item.num < 2) {
            return;
          }
          item.num--;
        } else {
          item.num++;
        }
      }
    });
    this.setState(
      {
        list
      },
      () => {
        this.totalPrice();
      }
    );
  };

  //删除商品
  deleteItem = ind => {
    let list = this.state.list;
    list.splice(ind, 1);
    this.setState({
      list
    })
  };

  // 渲染
  render() {
    return (
      <div className="shopCar">
        <div className="header">购物车</div>
        <List
          list={this.state.list}
          selectItem={this.selectItem}
          changeNum={this.changeNum}
          deleteItem={this.deleteItem}
        />
        <div className="footer">
          <label name="totalPrice">
            全选<input
              type="checkbox"
              checked={this.state.isSelectAll}
              onChange={this.isSelectAll}
              id="totalPrice"
            />
          </label>
          <p>
            <span>总价：</span>
            <em>￥{this.state.allPrice}</em>
          </p>
        </div>
      </div>
    );
  }
}
