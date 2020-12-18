import styled from "styled-components";

export const StyledFormContainer = styled.div`
  position: relative;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 12px 2px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  width: 300px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h2 {
    font-size: 1.3rem;
  }
`;

export const StyledFormGroup = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 0.2rem;
  }
`;

export const StyledFormInput = styled.input`
  padding: 0.5rem;
  border: none;
  background: #efefef;
  width: 40%auto;
  border-radius: 6px;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: #fff;
  }
`;

export const StyledButton = styled.button`
  border: none;
  border-radius: 6px;
  padding: 10px 0;
  background: #b74362;
  color: #fff;
  font-weight: 700;
  font-size: 1rem;

  :hover {
    cursor: pointer;
  }
`;

export const StyledResult = styled.div`
  text-align: center;

  h3 {
    position: absolute;
    top: -2.2rem;
    right: 0.5rem;
    font-size: 2rem;
    color: #b74362;

    :hover {
      cursor: pointer;
    }
  }
`;
