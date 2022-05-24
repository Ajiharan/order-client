import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import OrderList from "../core/components/OrderList";
import TextGroup from "../core/components/TextGroup";
import { selectOrderDetails } from "../state/order/orderSlice";
import { isEqual } from "lodash";
import "./styles/orderView.scss";

const OrderView = () => {
  const orderData = useSelector(selectOrderDetails, isEqual);

  return (
    <div className='order-view-container'>
      {orderData?.user && orderData?.address && orderData?.interest && (
        <React.Fragment>
          <OrderList data={orderData?.user} label={"My Details"} />
          <OrderList data={orderData?.address} label={"My Address"} />
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {Object.values(orderData?.interest).includes(true) && (
                <h3 className='order-view-container-title'>My Interests</h3>
              )}
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            {Object.entries(orderData?.interest)
              .filter((res) => res[1])
              .map((res) => (
                <Grid key={res[0]} item xs={4}>
                  <TextGroup label={res[1]} value={res[0]} />
                </Grid>
              ))}
          </Grid>
        </React.Fragment>
      )}
    </div>
  );
};

export default OrderView;
