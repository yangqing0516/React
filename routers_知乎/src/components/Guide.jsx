import React from "react";
import Route from "../router/route.jsx";
import { NavLink } from "react-router-dom";
import "../css/guide.css";
export default class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // console.log(this.props.routes);
    return (
      <div className="wrapper">
        <div className="content">
          <Route routes={this.props.routes} />
        </div>
        <div className="footer">
          <NavLink activeClassName="active" to="/guide/home">主页</NavLink>
          <NavLink to="/guide/idea">想法</NavLink>
          <NavLink to="/guide/university">大学</NavLink>
          <NavLink to="/guide/msg">信息</NavLink>
          <NavLink to="/guide/mine">我的</NavLink>
        </div>
      </div>
    );
  }
}
