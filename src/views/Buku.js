// node_modules
import React, { useContext } from "react";
import { Link } from "react-router-dom";

// context
import GlobalContext from "store/context";

const Buku = () => {
  const { sampleGlobalVar, updateSampleGlobalVar } = useContext(GlobalContext);

  return (
    <div>
      <Link className="text-indigo-600 underline" to="/">
        Home
      </Link>

      <p>{sampleGlobalVar} in Buku</p>
      <br />
      <br />
      <button
        className="bg-green-400 px-4 py-2 rounded-md shadow-md"
        type="button"
        onClick={() =>
          updateSampleGlobalVar(Math.floor(Math.random() * 900000 + 100000))
        }
      >
        Update Sample Global Var
      </button>
    </div>
  );
};

Buku.displayName = "Buku";

export default Buku;
