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
    box-shadow: ${(props) => props.theme.colors.select.shadow};
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
    border-bottom: 1px solid ${(props) => props.theme.colors.select.divider};
  }

  .Select__input {
    color: transparent !important;
  }
`;
