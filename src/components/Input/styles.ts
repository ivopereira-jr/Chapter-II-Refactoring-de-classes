import styled from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: Boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;

  color: ${(props) => props.isFocused || props.isFilled
  ? '#ff9000'
  : 'transparent'};
  background: #fff;
  border-radius: 8px;
  border-color: ${(props) => props.isFocused 
  ? '#ff9000'
  : 'transparent'};
  padding: 18px 24px;
  width: 100%;
  font-size: 16px;

  & + div {
    margin-top: 24px;
  }

  h1 {
    margin-bottom: 40px;
    font-weight: 600;
    font-size: 36px;
    line-height: 36px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #b7b7cc;

    &::placeholder {
      color: #b7b7cc;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
