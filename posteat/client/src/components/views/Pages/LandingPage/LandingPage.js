import React from "react";
import Filter from "./Filter";
import SearchInput from "./SearchInput";
import LoadItem from "../../commons/MoreItem";

const LandingPage = () => {
  return (
    <div style={{ width: "85%", margin: "0 auto" }}>
      <h1>posteat...</h1>
      <SearchInput></SearchInput>
      <h2>식당 리스트</h2>
      <hr />
      <Filter />
      <LoadItem LandingPage></LoadItem>
    </div>
  );
};

export default LandingPage;
