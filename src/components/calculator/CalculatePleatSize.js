import React, { useState } from "react";
import * as sc from "./StyledCalculatorForm";

const CalculatePleatSize = () => {
  const [waistband, setWaistband] = useState(null);
  const [numOfPleats, setNumOfPleats] = useState(null);
  const [pleatType, setPleatType] = useState(null);
  const [spacing, setSpacing] = useState(null);
  const [calculation, setCalculation] = useState(null);

  // TODO: check spacing math
  const findPleatDepth = () => {
    let result;

    if (!pleatType) {
      return alert("Please enter a pleat type");
    }

    if (pleatType === "knife" && !spacing) {
      result = (waistband / numOfPleats) * 2;
    } else if (pleatType === "knife" && spacing) {
      result = (waistband / numOfPleats) * 2 + spacing;
    }

    if (pleatType === "box" && !spacing) {
      result = (waistband / numOfPleats) * 3;
    } else if (pleatType === "box" && spacing) {
      result = (waistband / numOfPleats) * 3 + spacing;
    }

    setCalculation(result);
  };

  return (
    <sc.StyledFormContainer>
      {calculation ? (
        <sc.StyledResult>
          <h3 onClick={() => setCalculation(null)}>&times;</h3>
          <h2>{calculation} inches</h2>
        </sc.StyledResult>
      ) : (
        <>
          <h2>Pleat Size</h2>
          <p>Calculate depth of each pleat</p>
          <sc.StyledFormGroup>
            <label htmlFor="fabricLength">Waistband Length</label>
            <sc.StyledFormInput
              onChange={(e) => setWaistband(e.target.value)}
              type="number"
              name="fabricLength"
              id="fabricLength"
              value={waistband}
            />
          </sc.StyledFormGroup>
          <sc.StyledFormGroup>
            <label htmlFor="pleatNumber">Number of Pleats</label>
            <sc.StyledFormInput
              onChange={(e) => {
                setNumOfPleats(e.target.value);
              }}
              type="number"
              name="pleatNumber"
              id="pleatNumber"
              value={numOfPleats}
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
            />
          </sc.StyledFormGroup>
          <sc.StyledFormGroup>
            <label htmlFor="type">Pleat Type</label>
            <div style={{ display: "flex" }}>
              <label style={{ marginRight: "1rem" }}>
                <input
                  onChange={(e) => {
                    console.log(e.target.value);
                    setPleatType(
                      e.target.checked && e.target.value.toLowerCase()
                    );
                  }}
                  type="checkbox"
                  name="type"
                  value="knife"
                />{" "}
                Knife
              </label>
              <label>
                <input
                  onChange={(e) => {
                    setPleatType(
                      e.target.checked && e.target.value.toLowerCase()
                    );
                  }}
                  type="checkbox"
                  value="box"
                />{" "}
                Box
              </label>
            </div>
          </sc.StyledFormGroup>
          <sc.StyledFormGroup>
            <sc.StyledButton onClick={findPleatDepth}>
              Calculate
            </sc.StyledButton>
          </sc.StyledFormGroup>{" "}
        </>
      )}
    </sc.StyledFormContainer>
  );
};

export default CalculatePleatSize;
