import React, { useState } from "react";
import * as sc from "./StyledCalculatorForm";

const CalculateNumberOfPleats = () => {
  const [fabricWidth, setFabricWidth] = useState(null);
  const [pleatWidth, setPleatWidth] = useState(null);
  const [spacing, setSpacing] = useState(null);
  const [calculation, setCalculation] = useState(null);

  const calcPleats = () => {
    let result = Number(pleatWidth) * 3;
    if (spacing !== null) {
      result = Number(result) + Number(spacing);
    }
    console.log(result);

    setCalculation((fabricWidth / result).toFixed(2));
  };

  return (
    <sc.StyledFormContainer>
      {calculation ? (
        <sc.StyledResult>
          <h3 onClick={() => setCalculation(null)}>&times;</h3>
          <h2>{calculation} pleats</h2>
        </sc.StyledResult>
      ) : (
        <>
          <h2>Calculate number of pleats based on fabric length</h2>
          <sc.StyledFormGroup>
            <label htmlFor="fabricLength">Fabric Length</label>
            <sc.StyledFormInput
              onChange={(e) => setFabricWidth(e.target.value)}
              type="number"
              name="fabricLength"
              id="fabricLength"
              placeholder="inches"
              value={fabricWidth}
            />
          </sc.StyledFormGroup>

          <sc.StyledFormGroup>
            <label htmlFor="pleatWidth">Pleat Width</label>
            <sc.StyledFormInput
              onChange={(e) => setPleatWidth(e.target.value)}
              type="number"
              name="pleatWidth"
              id="pleatWidth"
              placeholder="inches"
              value={pleatWidth}
            />
          </sc.StyledFormGroup>

          <sc.StyledFormGroup>
            <label htmlFor="spacing">Spacing</label>
            <sc.StyledFormInput
              onChange={(e) => setSpacing(e.target.value)}
              type="number"
              name="spacing"
              id="spacing"
              placeholder="optional"
              value={spacing}
            />
          </sc.StyledFormGroup>

          <sc.StyledFormGroup>
            <sc.StyledButton onClick={calcPleats}>Calculate</sc.StyledButton>
          </sc.StyledFormGroup>
        </>
      )}
    </sc.StyledFormContainer>
  );
};

export default CalculateNumberOfPleats;
