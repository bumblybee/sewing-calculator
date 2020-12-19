import styled from "styled-components";

export const StyledFormContainer = styled.div`
  position: relative;
  background: #fdfdfd;
  border-radius: 6px;
  box-shadow: 0 2px 12px 4px rgba(0, 0, 0, 0.25);
  padding: 1rem 2rem 2rem;
  width: 350px;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h2 {
    font-size: 1.1rem;
    margin: 0.5rem 0 0;
  }

  p {
    margin-bottom: 1.5rem;
  }

  @media (max-width: 768px) {
    :not(:last-child) {
      margin-bottom: 1rem;
    }
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
  padding: 10px;
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
  background: #6eae9e;
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
    top: 0;
    right: 0.5rem;
    font-size: 2rem;
    color: #6eae9e;

    :hover {
      cursor: pointer;
    }
  }
`;
