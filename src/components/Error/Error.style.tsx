import styled from "styled-components";

export const ErrorContainer = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .error {
    background-color: #eb8c8c;
    max-width: 50rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 12rem;
    border-radius: 0.8rem;
    font-size: 1.4rem;
    font-weight: 500;
    p {
      margin-bottom: 2rem;
    }
  }
`;
