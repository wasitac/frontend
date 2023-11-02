import React from "react";
import Filter from "./Filter";
import SearchInput from "./SearchInput";
<<<<<<< HEAD
import LoadItem from "../../commons/MoreItem";

const LandingPage = () => {
=======
import GridCard from "../../commons/GridCard";

const LandingPage = () => {

>>>>>>> 5842ca2622701758cc130ba6892ecdc3cc0ef7e7
  return (
    <div style={{ width: "85%", margin: "0 auto" }}>
      <h1>posteat...</h1>
      <SearchInput></SearchInput>
      <h2>식당 리스트</h2>
      <hr />
      <Filter />
<<<<<<< HEAD
      <LoadItem LandingPage></LoadItem>
=======
      <GridCard type='LandingPage' />
>>>>>>> 5842ca2622701758cc130ba6892ecdc3cc0ef7e7
    </div>
  );
};

export default LandingPage;
