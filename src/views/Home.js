// node_modules
import React, { useContext } from "react";
import { Link } from "react-router-dom";

// context
import GlobalContext from "store/context";

const Home = () => {
    const { sampleGlobalVar, updateSampleGlobalVar } = useContext(
        GlobalContext
    );

    return (
        <div>
            {/* Sample route to check Context */}
            <Link className="text-red-600 underline" to="/about">
                About
            </Link>
            {/* Sample route to check Context END */}

            <p>{sampleGlobalVar} in Home</p>

            <br />
            <br />
            <button
                className="bg-red-400 px-4 py-2 rounded-md shadow-md"
                type="button"
                onClick={() =>
                    updateSampleGlobalVar(
                        Math.floor(Math.random() * 900000 + 100000)
                    )
                }
            >
                Update Sample Global Var
            </button>
        </div>
    );
};

Home.displayName = "Home";

export default Home;
