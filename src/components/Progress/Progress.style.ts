import styled from "styled-components";
import { respondTo } from "../../styles/_responsive";

export const StyledProgress = styled.header`
  width: 100%;
  margin-bottom: 4rem;
  display: grid;
  justify-content: space-between;
  gap: 1.2rem;
  grid-template-columns: auto auto;
  font-size: 1.8rem;
  color: var(--color-medium);

  progress {
    --webkit-appearance: none;
    width: 100%;
    height: 12px;
    grid-column: 1 / -1;
  }

  ::-webkit-progress-bar {
    background-color: var(--color-medium);
    border-radius: 100px;
  }
  ::-webkit-progress-value {
    background-color: var(--color-theme);
    border-radius: 100px;
  }

  ${respondTo.small`

  font-size: 1.4rem;

  
  `}
`;
