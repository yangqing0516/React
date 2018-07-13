import React, { Fragment } from "react";
import Loading from "../common/loading";
export default WrapComponent => {
  return class extends WrapComponent {
    // constructor(props) {
    //   super(props);
    // }
    render() {
      if (this.state.fetching) {
        return (
          <Fragment>
            {super.render()}
            <Loading />
          </Fragment>
        );
      } else {
        return super.render();
      }
    }
  };
};
