import React from "react";
import CollapseContainer from "../core/components/CollapseContainer";
import "./styles/orderTitle.scss";

const OrderTitle = () => {
  return (
    <div className='orderTitle-container'>
      <CollapseContainer>
        <div className='orderTitle-container-item'>
          <h1>Order Details</h1>
          <p>Ready to join the world’s most ambitious luxury marketplace?</p>
        </div>
      </CollapseContainer>
    </div>
  );
};

export default React.memo(OrderTitle);
