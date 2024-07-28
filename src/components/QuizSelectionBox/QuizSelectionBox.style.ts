import styled from "styled-components";
import { respondTo } from "../../styles/_responsive";

export const BoxContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryLight2};
  width: 100%;
  max-width: 80rem;
  height: 18rem;
  margin: 0 auto;
  border-radius: 2rem;
  display: flex;
  padding: 2rem;
  gap: 2rem;
  margin-top: 4rem;

  ${respondTo.small`

  margin-top: 2rem;
  padding: 1rem;
  gap: 1rem;
  height: 12rem;

`}
`;
