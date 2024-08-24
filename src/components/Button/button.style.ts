import styled from "styled-components";
import { respondTo } from "../../styles/_responsive";

interface StyledButtonProps {
  color: string | undefined;
  size: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  color: ${({ color, theme }) => (color ? "#fff" : theme.colors.textDark)};
  margin-top: ${({ size }) => (size === "small" ? "0rem" : "4rem")};
  font-size: 1.6rem;
  padding: ${({ size }) => (size === "small" ? "1.2rem 2.5rem" : "2rem 4rem")};
  font-weight: 600;
  border-radius: ${({ size }) => (size === "small" ? "50rem" : "0.8rem")};

  outline: none;
  border: none;
  background-color: ${({ color, theme }) =>
    color ? color : theme.colors.secondry};
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:not(:disabled):hover {
    transform: translateY(-0.3rem);
    box-shadow: 0px 37px 31px 7px rgba(0, 0, 0, 0.1);
  }
  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
  &:active {
    transform: translateY(-0rem);
  }

  ${respondTo.small`
  padding: ${({ size }: { size: string }) =>
    size === "small" ? "1rem 1.5rem" : "1.5rem 3rem"};
  font-size: 1.4rem;

    `}
`;
