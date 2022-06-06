import React from "react";
import PropTypes from "prop-types";

const Layout = ({ children }) => (
  <div className="p-4 min-h-screen min-w-full">{children}</div>
);

Layout.propTypes = {
  children: PropTypes.element,
};

Layout.defaultProps = {
  children: <p>Loading</p>,
};

Layout.displayName = "Layout";

export default Layout;
