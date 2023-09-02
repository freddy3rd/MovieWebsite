import React, { useContext } from "react";
import Popular from "./Movie List/Popular";
import Drama from "./Movie List/Drama";
import Action from "./Movie List/Action";
import { Context } from "./context/Context";
import Family from "./Movie List/Family";

export default function carousel(props) {
  const OPTIONS = { dragFree: true };

  return (
    <div className="grid justify-center items-center gap-4 mt-4">
      <Popular options={OPTIONS} />
      <Drama options={OPTIONS} />
      <Action options={OPTIONS} />
      <Family options={OPTIONS} />
    </div>
  );
}
