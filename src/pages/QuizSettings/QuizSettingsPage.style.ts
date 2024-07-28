import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  gap: 3rem;
  padding: 20px;
  height: 100vh;

  h1 {
    font-size: 3rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 300px;
`;

export const Label = styled.label`
  font-size: 1.8rem;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 1.4rem;
  background-color: ${({ theme }) => theme.colors.primaryLight2};
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;

  &:focus {
    outline: none;
  }
`;

export const Select = styled.select`
  padding: 1rem;
  font-size: 1.4rem;
  font-weight: 500;

  background-color: ${({ theme }) => theme.colors.primaryLight2};
  border: none;
  border-radius: 0.5rem;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 1rem;
  color: white;
  background-color: #4caf50;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &.medium {
    background-color: #ff9800;
  }

  &.hard {
    background-color: #f44336;
  }
`;
