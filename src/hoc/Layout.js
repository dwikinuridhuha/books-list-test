import React from "react";
import PropTypes from "prop-types";

const Layout = ({ children }) => <>{children}</>;

Layout.propTypes = {
  children: PropTypes.element,
};

Layout.defaultProps = {
  children: <p>Loading</p>,
};

Layout.displayName = "Layout";

export default Layout;
