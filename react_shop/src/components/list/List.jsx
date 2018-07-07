import React from "react";
import "./css/style.css";
export default class List extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    if (!this.props.list) {
      return null;
    }
    // console.log(this.props.list);
    return (
      <div className="list">
        {this.props.list.map((value, index) => {
          return (
            <div className="list_page" key={index}>
              <p>
                <input
                  type="checkbox"
                  checked={value.isChecked}
                  onChange={() => this.props.selectItem(index)}
                />
                <button onClick={() => this.props.deleteItem(index)}>×</button>
              </p>
              <dl>
                <dt>
                  <img src={value.imgUrl} alt="" />
                </dt>
                <dd>
                  <h2>{value.describe}</h2>
                  <h3>￥{value.price}</h3>
                  <h4>
                    <em onClick={() => this.props.changeNum(index, "-")}>-</em>
                    <span>{value.num}</span>
                    <em onClick={() => this.props.changeNum(index, "+")}>+</em>
                  </h4>
                </dd>
              </dl>
            </div>
          );
        })}
      </div>
    );
  }
}
