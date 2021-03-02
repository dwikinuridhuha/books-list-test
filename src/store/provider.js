import React, { useState } from "react";
import PropTypes from "prop-types";

import GlobalContext from "./context";

const GlobalProvider = ({ children }) => {
    const [sampleGlobalVar, updateSampleGlobalVar] = useState("Sample Var");

    return (
        <GlobalContext.Provider
            value={{ sampleGlobalVar, updateSampleGlobalVar }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

GlobalProvider.propTypes = {
    children: PropTypes.element,
};

GlobalProvider.defaultProps = {
    children: <p>Loading</p>,
};

GlobalProvider.displayName = "GlobalProvider";

export default GlobalProvider;
