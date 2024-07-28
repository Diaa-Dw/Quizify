import styled from "styled-components";
import { respondTo } from "../../styles/_responsive";

export const StyledTimer = styled.div`
  float: left;
  font-size: 1.8rem;
  color: var(--color-medium);
  border: 2px solid var(--color-dark);
  padding: 1.35rem 2.8rem;
  border-radius: 100px;
  background-color: rgba(255, 255, 255, 0.3);
  font-weight: 500;

  ${respondTo.small`

  font-size: 1.4rem;
  padding: .8rem 1.8rem;

    
    `}
`;
