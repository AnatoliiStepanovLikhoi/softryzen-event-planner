import Select from "react-select";
import styled from "styled-components";

export const StyledSelect = styled(Select)`
  .Select__control {
    width: 69px;
    height: 48px;
    background-color: ${(props) => props.theme.colors.input.bg};

    font-size: 16px;
    line-height: 1;
    font-weight: 500;
    border-radius: 8px;
    box-shadow: 3px 4px 9px 0px rgba(166, 141, 174, 0.75);
    outline: none;
    border: none;
  }

  .Select__indicator {
    padding: 8px 8px 8px 0;
  }

  .Select__value--container {
    padding: 2px 0px 2px 8px;
  }

  .Select__single-value {
    color: ${(props) => props.theme.colors.input.sortInputText};
    overflow: visible;
  }
  .Select__defaultValue {
    color: ${(props) => props.theme.colors.input.sortInputText};
  }

  .Select__indicator {
    color: ${(props) => props.theme.colors.input.sortInputText};
  }
  .Select__indicator-separator {
    display: none;
  }

  .Select__menu {
    padding: 16px 12px;
    background-color: ${(props) => props.theme.colors.input.bg};
    border-radius: 8px;
    color: ${(props) => props.theme.colors.input.sortInputTextInactive};
  }

  .Select__menu-list {
    padding: 0;
    list-style: none;
    text-align: left;
  }

  .Select__option {
    padding: 4px 0;
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.input.bg};
    color: ${(props) => props.theme.colors.input.sortInputTextInactive};
    border-bottom: 1px solid #aca7c3;
  }

  .Select__input {
    color: transparent !important;
  }
`;
