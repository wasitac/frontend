import React from "react";
import ReviewForm from "./ReviewForm";
import StoreInfo from "./StoreInfo";
import { useParams } from "react-router";
import StoreMenu from "./StoreMenu";

const StoreDetail = () => {
  const { storeId } = useParams();

  return (
    <>
      <div style={{ width: "70%", backgroundColor: "#eee", margin: "20px auto", padding: "10px"}}>
        <StoreInfo storeId={storeId}></StoreInfo>
        <hr />
        <StoreMenu storeId={storeId} />
        <hr />
        <ReviewForm></ReviewForm>
        
      </div>
    </>
  );
};

export default StoreDetail;
