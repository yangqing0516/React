import React from "react";
import "../../../css/follow.css";
import { NavLink } from "react-router-dom";
import widthLoading from "../../hoc/withLoading";
class Follow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      fetching: true
    };
  }
  componentDidMount() {
    fetch(
      "https://www.easy-mock.com/mock/5b3dd1e253213d0beaa7cd49/api/question"
    )
      .then(response => {
        return response.json();
      })
      .then(body => {
        this.setState({
          data: body.data,
          fetching: false
        });
      });
  }
  render() {
    let detail = window.sessionStorage.getItem("detail");
    if (detail) {
      detail = JSON.parse(detail);
    }
    return (
      <div className="list">
        {this.state.data.map((item, index) => {
          if (detail) {
            if (item.id === detail.id) {
              item = detail;
            }
          }
          return (
            <div className="list_page" key={index}>
              <NavLink
                to={{
                  pathname: "/detail",
                  params: item
                }}
              >
                <p>
                  <img src={item.target.author.avatar_url} alt="" />
                  <span>{item.target.author.name}</span>
                </p>
                <h2>{item.target.question.title}</h2>
                <h4 style={{ WebkitBoxOrient: "vertical" }}>
                  {item.target.excerpt}
                </h4>
                <h3>
                  <span>
                    {item.target.thanks_count} 赞同 ·
                    {item.target.comment_count} 评论
                  </span>
                </h3>
              </NavLink>
            </div>
          );
        })}
      </div>
    );
  }
}

export default widthLoading(Follow);
