import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../theme/theme';

const Switch = () => {

  const { toggleTheme } = useContext(ThemeContext);

  return (
    <StyledWrapper>
      <label className="switch">
        <input type="checkbox" onChange={toggleTheme} />
        <span className="slider" />
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .switch {
    font-size: 17px;
    position: relative;
    display: inline-block;
    width: 2.5em;
    height: 1.4em;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    --background: #424a58;
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--background);
    transition: .5s;
    border-radius: 30px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 1em;
    width: 1em;
    border-radius: 50%;
    left: 10%;
    bottom: 15%;
    box-shadow: inset 8px -4px 0px 0px #C2B067;
    background: var(--background);
    transition: .5s;
  }

  input:checked + .slider {
    background-color: #424a58;
  }

  input:checked + .slider:before {
    transform: translateX(100%);
    box-shadow: inset 15px -4px 0px 15px #C2B067;
  }
`;

export default Switch;