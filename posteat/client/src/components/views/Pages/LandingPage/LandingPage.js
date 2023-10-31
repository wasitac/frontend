import React from "react";
import Filter from "./Filter";
import SearchInput from "./SearchInput";
import GridCard from "../../commons/GridCard";

const LandingPage = () => {

  return (
    <div style={{ width: "85%", margin: "0 auto" }}>
      <h1>posteat...</h1>
      <SearchInput></SearchInput>
      <h2>식당 리스트</h2>
      <hr />
      <Filter />
      <GridCard type='LandingPage' />
    </div>
  );
};

export default LandingPage;
