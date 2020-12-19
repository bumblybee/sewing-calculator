import React, { useState } from "react";
import * as sc from "./StyledCalculatorForm";

const CalculateNumberOfPleats = () => {
  const [fabricWidth, setFabricWidth] = useState(null);
  const [pleatWidth, setPleatWidth] = useState(null);
  const [spacing, setSpacing] = useState(null);
  const [pleatType, setPleatType] = useState(null);
  const [calculation, setCalculation] = useState(null);

  const calcPleats = () => {
    let width;

    if (pleatType === "box") {
      width = Number(pleatWidth) * 3;
    } else if (pleatType === "knife") {
      width = Number(pleatWidth) * 2;
    } else if (!pleatType) {
      return alert("Please choose a type of pleat.");
    }

    if (spacing !== null) {
      width = Number(width) + Number(spacing);
    }
    console.log(width);
    const numberOfPleats = (fabricWidth / width).toFixed(2);

    if (numberOfPleats % 1 !== 0) {
      const remainder = numberOfPleats % 1;
    }

    setCalculation(Number(numberOfPleats));
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
          <h2>Number of Pleats</h2>
          <p>Calculate total number of pleats</p>
          <sc.StyledFormGroup>
            <label htmlFor="waistband">Waistband Width</label>
            <sc.StyledFormInput
              onChange={(e) => setFabricWidth(e.target.value)}
              type="number"
              name="waistband"
              id="waistband"
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
                  id="type"
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
                  name="type"
                  id="type"
                  value="box"
                />{" "}
                Box
              </label>
            </div>
          </sc.StyledFormGroup>

          <sc.StyledFormGroup>
            <sc.StyledButton onClick={fabricWidth && calcPleats}>
              Calculate
            </sc.StyledButton>
          </sc.StyledFormGroup>
        </>
      )}
    </sc.StyledFormContainer>
  );
};

export default CalculateNumberOfPleats;
