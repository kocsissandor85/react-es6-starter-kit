import React from "react";
import {Link} from "react-router";

export default React.createClass({

  displayName: "App",

  render: function () {
    return (
      <div className="app">
        <nav className="navigation">
            <Link to="/">Index page</Link>
        </nav>

        <section className="page-content">
          {this.props.children}
        </section>
      </div>
    );
  }

});