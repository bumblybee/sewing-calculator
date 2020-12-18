import styled from "styled-components";

export const StyledCalculatorPage = styled.div`
  width: 80%;
  height: 100%;
  padding: 5rem;
  margin: 5% auto;
  display: flex;
  align-items: start;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
