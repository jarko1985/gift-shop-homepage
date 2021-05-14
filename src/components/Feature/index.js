import React from "react";
import { FeatureContainer, FeatureButton } from "./FeatureElements";

const Feature = ({ title, subTitle }) => {
  return (
    <FeatureContainer>
      <h1>{title}</h1>
      <p>{subTitle}</p>
      <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
