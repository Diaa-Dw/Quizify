import styled from "styled-components";
import { respondTo } from "../../styles/_responsive";

export const StyledQuestion = styled.div`
  font-size: 2rem;
  text-align: center;

  ${
    respondTo.small`
  font-size: 1.6rem;
    
    `
  }
`;
