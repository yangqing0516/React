import React from "react";
import "../css/detail.css";
export default class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {}
    };
    if (props.location && props.location.params) {
      window.sessionStorage.setItem(
        "detail",
        JSON.stringify(props.location.params)
      );
    }
    console.log(props.location.params);
  }
  componentDidMount() {
    let item = this.props.location && this.props.location.params;
    if (!item) {
      item = JSON.parse(window.sessionStorage.getItem("detail"));
      console.log(item);
    }
    this.setState({
      item
    });
  }
  clickFn = () => {
    this.props.history.goBack();
  };
  addFn = () => {
    let { item } = this.state;
    item.target.thanks_count++;
    this.setState(
      {
        item
      },
      () => {
        window.sessionStorage.setItem(
          "detail",
          JSON.stringify(this.state.item)
        );
      }
    );
  };
  render() {
    let item = this.state.item;
    if (!Object.keys(item).length) {
      return null;
    }
    return (
      <div className="detail">
        <div className="detail_header">
          <span onClick={this.clickFn}>
            <i className="icon iconfont icon-xiangzuo" />
          </span>
          <b>{item.target.question.title}</b>
        </div>
        <div className="detail_content">{item.target.excerpt}</div>
        <div className="detail_footer">
          <i className="icon iconfont icon-dianzan" onClick={this.addFn} />
          {item.target.thanks_count} 赞同 · {item.target.comment_count} 评论
        </div>
      </div>
    );
  }
}
