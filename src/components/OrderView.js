import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import TextGroup from "../core/components/TextGroup";
import { selectOrderDetails } from "../state/order/orderSlice";
import "./styles/orderView.scss";

const OrderView = () => {
  const orderData = useSelector(selectOrderDetails);

  return (
    <div className='order-view-container'>
      {orderData?.user && orderData?.address && orderData?.interest && (
        <React.Fragment>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <h3 className='order-view-container-title'>My Details</h3>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            {Object.entries(orderData?.user).map((res, i) => (
              <Grid key={res[0]} item xs={4}>
                <TextGroup label={res[0]} value={res[1]} />
              </Grid>
            ))}
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <h3 className='order-view-container-title'>My Address</h3>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            {Object.entries(orderData?.address).map((res, i) => (
              <Grid key={res[0]} item xs={4}>
                <TextGroup label={res[0]} value={res[1]} />
              </Grid>
            ))}
          </Grid>
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
              .map((res, i) => (
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
