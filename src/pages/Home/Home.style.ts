import styled from "styled-components";
import { respondTo } from "../../styles/_responsive";

export const StyledHome = styled.div`
  min-height: 60vh;
  display: flex;
  align-items: center;
  ${respondTo.small`
  flex-direction: column-reverse;

    `}
`;

export const LeftBox = styled.div`
  margin-top: 12rem;
  width: 40%;
  padding: 2.5rem;
  h1 {
    font-size: 4.8rem;
  }
  h3 {
    font-size: 1.8rem;
    font-weight: 400;
    margin-top: 3rem;
  }

  ${respondTo.xlarge`
  width:50%;

  h1{
  font-size:3.5rem
  }

  h3{
  font-size:1.6rem;
  }

  `}

  ${respondTo.medium`
  width:50%;

  h1{
  font-size:2.2rem
  }

  h3{
  font-size:1.2rem;
  }

  `}

${respondTo.small`
  margin-top: 2rem;
  text-align:center;
width:100%;
    `}
`;

export const RightBox = styled.div`
  width: 60%;
  padding: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  ${respondTo.xlarge`
  img{
  width:30rem;
  height:30rem;
  align-items: center;
  }

  `}

  ${respondTo.medium`
  width:50%;
  justify-content: flex-end;

  img{
  width:20rem;
  height:20rem;
  align-items: center;
  }

  `}

${respondTo.small`
width:100%;
  justify-content: center;

    `}
`;
