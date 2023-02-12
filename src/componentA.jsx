import React, { useState } from "react";
import ComponentB from "./componentB";

const ComponentA = () => {
  const [intial, setIntial] = useState(2);

  return (
    <div className="compA">
      <ComponentB className="compB" value={intial} />
    </div>
  );
};
export default ComponentA;
