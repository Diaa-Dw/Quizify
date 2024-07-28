import { Link } from "react-router-dom";
import styled from "styled-components";
import { respondTo } from "../../styles/_responsive";

export const QuizBox = styled(Link)`
  background: linear-gradient(
    to right,
    ${({ color }) => (color ? color[0] : "rgba(255,255,255,0.5)")},
    ${({ color }) => (color ? color[1] : "rgba(255,255,255,0.4)")}
  );
  width: 100%;
  border-radius: 1.2rem;
  font-size: 2.4rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  min-height: 14rem;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  color: #fff;
  user-select: none;
  .icon {
    font-size: 4rem;
    color: ${({ iconColor }) => (!iconColor ? "#fff" : iconColor)};
  }

  &:hover {
    cursor: pointer;
    opacity: 0.9;
    transform: translateY(-0.3rem);
  }

  ${respondTo.small`
  align-self:center;
  font-size: 1.6rem;
  text-align:center;
  min-height: 10rem;

  .icon{
  font-size:3rem;
  }

    `}
`;
