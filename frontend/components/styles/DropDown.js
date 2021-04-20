import styled, { keyframes } from 'styled-components';

const DropDown = styled.div`
  position: absolute;
  width: 100%;
  z-index: 2;
  border: 1px solid var(--lightGray);
`;

const DropDownItem = styled.div`
  border-bottom: 1px solid var(--lightGray);
  background: ${(props) => (props.highlighted ? '#f7f7f7' : 'white')};
  padding: 1rem;
  transition: all 0.2s;
  ${(props) => (props.highlighted ? 'padding-left: 2rem;' : null)};
  display: flex;
  align-items: center;
  border-left: 10px solid
    ${(props) => (props.highlighted ? props.theme.lightgrey : 'white')};

  @media (max-width: 600px) {
    padding: 0.5rem;
    font-size: 1rem;
  }

  img {
    margin-right: 10px;

    @media (max-width: 600px) {
      margin-right: 7px;
    }
  }
`;

const glow = keyframes`
  from {
    box-shadow: 0 0 0px yellow;
  }

  to {
    box-shadow: 0 0 10px 1px yellow;
  }
`;

const SearchStyles = styled.div`
  position: relative;
  input {
    width: 100%;
    padding: 10px;
    border: 0;
    font-size: 1.5rem;

    &.loading {
      animation: ${glow} 0.5s ease-in-out infinite alternate;
    }

    @media (max-width: 600px) {
      font-size: 1rem;
    }
  }
`;

export { DropDown, DropDownItem, SearchStyles };
