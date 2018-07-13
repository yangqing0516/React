import React from "react";
import Route from "../../router/route";
import { NavLink } from "react-router-dom";
import "../../css/home.css";
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="home">
        <div className="home_nav">
          <NavLink activeClassName="active" to="/guide/home/recommend">
            推荐
          </NavLink>
          <NavLink to="/guide/home/follow">评论</NavLink>
          <NavLink to="/guide/home/hot">热榜</NavLink>
        </div>
        <div className="home_router">
          <Route routes={this.props.routes} />
        </div>
      </div>
    );
  }
}
