import React, { useState } from "react";
import { Context } from "./MainComponents/context/Context";

export default function ContextProvide({ children }) {
  const [imageLoaded, setLoaded] = useState(false);
  const [bgLoaded, setBgLoaded] = useState(false);
  const [id, setId] = useState("");
  return (
    <Context.Provider
      value={{
        setLoaded,
        setBgLoaded,
        setId,
        bgLoaded,
        imageLoaded,
        id,
      }}
    >
      {children}
    </Context.Provider>
  );
}
