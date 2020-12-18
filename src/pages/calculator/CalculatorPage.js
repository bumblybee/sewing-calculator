import React, { useState } from "react";
import CalculateNumberOfPleats from "../../components/calculator/CalculateNumberOfPleats";
import CalculatePleatSize from "../../components/calculator/CalculatePleatSize";
import * as sc from "./StyledCalculatorPage";

const CalculatorPage = () => {
  return (
    <sc.StyledCalculatorPage>
      <CalculateNumberOfPleats />
      <CalculatePleatSize />
    </sc.StyledCalculatorPage>
  );
};

export default CalculatorPage;
