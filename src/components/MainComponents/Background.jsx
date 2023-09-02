import React, { useContext } from "react";
import { List } from "../images";
import { Context } from "./context/Context";
export default function Background(props) {
  const { setBgLoaded } = useContext(Context);
  const { id } = props;
  return (
    <div>
      <>
        {List.map((data) => {
          if (data.id === id) {
            return (
              <img
                onLoad={() => setBgLoaded(true)}
                key={data.title}
                className="w-full h-full absolute md:object-cover object-fill object-center -z-10 blur-sm "
                src={`.././src/assets/${data.image}`}
              />
            );
          }
        })}
      </>
    </div>
  );
}
