import React from 'react';
import styled from 'styled-components';

// export interface ButtonProps {
//   variant: 'primary' | 'secondary';
// }

export const BaseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: white;
  padding: 1rem 2rem;
  border-radius: 2rem;

  &.primary {
    transition: background-color 0.5s;
    background-color: #8181ee;
    &:hover {
      /* background-color: #5b5bc6; */
      background-color: ${({ theme }) => theme.colors.indigo};
    }
  }

  &.secondary {
    transition: background-color 0.5s;
    background-color: hotpink;
    color: #1a1724;
    &:hover {
      background-color: #ed3456;
      color: white;
    }
  }
`;
