import React from "react";
import "./customLayout.styles.scss";
import CustomHeader from "../../components/header/customHeader.component";

const CustomLayout = (props) => (
  <div className="container">
    <CustomHeader />

    <p>Hello from the interview Page</p>
  </div>
);

export default CustomLayout;
