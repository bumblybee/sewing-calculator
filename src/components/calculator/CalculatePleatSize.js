import React, { useState } from "react";
import * as sc from "./StyledCalculatorForm";

const CalculatePleatSize = () => {
  return (
    <sc.StyledFormContainer>
      <h2>
        Calculate pleat size based on length of fabric and number of pleats
      </h2>
      <sc.StyledFormGroup>
        <label htmlFor="fabricLength">Fabric Length</label>
        <sc.StyledFormInput
          type="number"
          name="fabricLength"
          id="fabricLength"
        />
      </sc.StyledFormGroup>

      <sc.StyledFormGroup>
        <label htmlFor="pleatNumber">Number of Pleats</label>
        <sc.StyledFormInput type="number" name="pleatNumber" id="pleatNumber" />
      </sc.StyledFormGroup>

      <sc.StyledFormGroup>
        <label htmlFor="spacing">Spacing</label>
        <sc.StyledFormInput
          type="number"
          name="spacing"
          id="spacing"
          placeholder="optional"
        />
      </sc.StyledFormGroup>

      <sc.StyledFormGroup>
        <sc.StyledButton>Calculate</sc.StyledButton>
      </sc.StyledFormGroup>
    </sc.StyledFormContainer>
  );
};

export default CalculatePleatSize;
