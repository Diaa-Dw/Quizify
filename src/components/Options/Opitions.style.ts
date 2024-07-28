import styled from "styled-components";

export const StyledOptions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0 2rem 0;
  gap: 1.2rem;
  margin-bottom: 3.2rem;

  .btn-option {
    width: 100%;
    text-align: left;
  }

  .btn-option.correct {
    background-color: #28a745;
    border: 2px solid #afffc1;
    color: var(--color-light);
  }
  .btn-option.wrong {
    background-color: #dc3545;
    border: 2px solid #ed9f95;
    color: var(--color-darkest);
  }

  .answer {
    transform: translateX(2rem);
  }

  .btn {
    display: block;
    font-family: inherit;
    color: inherit;
    font-size: 2rem;
    border: 2px solid ${({ theme }) => theme.colors.primaryLight2};
    background-color: ${({ theme }) => theme.colors.primaryLight2};
    padding: 1.2rem 2.4rem;
    cursor: pointer;
    max-width: 60rem;
    border-radius: 100px;
    transition: 0.3s;
    color: ${({ theme }) => theme.colors.textDark};
    font-weight: 500;
  }

  .btn-option:not([disabled]):hover {
    transform: translateX(1.2rem);
    background-color: transparent;
    color: #fff;
  }
  .btn-option:disabled {
    cursor: not-allowed;
  }
`;
