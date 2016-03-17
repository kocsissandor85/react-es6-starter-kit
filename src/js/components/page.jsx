import React from "react";

import TopDownRenderingMixin from "../mixins/top-down-rendering";

export default React.createClass({

  displayName: "Page",
  mixins: [TopDownRenderingMixin],

  propTypes: {
    data: React.PropTypes.object
  },

  render: function () {
    return (
      <div>
        <h1>React-es6-starter-kit</h1>
        {/* {this.props.data.get("any_key_you_like")} */}
        <p>A simple starter kit for your React project.</p>
      </div>
    );
  }

});