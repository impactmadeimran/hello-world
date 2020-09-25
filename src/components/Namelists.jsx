import React from "react";

function Namelists() {
  const names = ["Imran", "Andy", "Khoby","Imran"];
  const namelist = names.map((name,index) => <h2  align = "center"> {name}</h2>);
  return <div>{namelist}</div>;
  }

export default Namelists;
