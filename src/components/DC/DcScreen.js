import React from "react";
import { HeroList } from "../hero/HeroList";

export const DcScreen = () => {
  return (
    <div>
      <h1 className="text-center mt-2">DC Comics</h1>
      <hr />
      <HeroList publisher={'DC Comics'}/>
    </div>
  );
};
