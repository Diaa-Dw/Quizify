import styled from "styled-components";
import { respondTo } from "../../styles/_responsive";
export const ResultContainer = styled.div`
  width: 100%;
  height: 30rem;
  border-radius: 0.8rem;
  margin-top: 20rem;
  background: ${({ theme }) => theme.colors.primaryLight2};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  color: #fff;
  font-weight: 500;
  h2 {
    color: #303030;
    margin-bottom: 3rem;
  }

  p {
    background-color: #7c5cc1;
    padding: 1rem 1.5rem;
    border-radius: 50rem;
    margin-bottom: 1.5rem;
  }

  &:last-child {
    align-self: flex-end;
    justify-self: flex-end;
  }

  ${respondTo.small`
  
  p {
  font-size:1.4rem;
    padding: .5rem 1rem;
    margin-bottom: 1.5rem;
  }

  `};
`;
