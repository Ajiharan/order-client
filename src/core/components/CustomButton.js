import React from "react";
import "./button.scss";

const CustomButton = () => {
  return (
    <div className='custom-button-container'>
      <button type='submit'>SAVE</button>
    </div>
  );
};

export default React.memo(CustomButton);
