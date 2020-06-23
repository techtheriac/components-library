import styled from "styled-components";
import { DefaultTheme, TypeScale } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";

//Tells components the kind of modifiers that should be available.
//Modifier will then be specified as a Component attribute.
const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${TypeScale.helperText};
    padding: 8px;
  `,
  large: () => `
    font-size: ${TypeScale.header4};
    padding: 16px 24px;
  `,
};

const Button = styled.button`
  padding: 12px 24px;
  font-size: ${TypeScale.paragraph};
  border-radius: 3px;
  min-width: 10px;
  cursor: pointer;
  font-family: "Lato";
  transition: background-color 0.2 linear;

  &:focus {
    outline: 3px solid ${DefaultTheme.primaryColorHover};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${DefaultTheme.primaryColorActive};
    border-color: ${DefaultTheme.primaryColorActive};
  }
`;

const PrimaryButton = styled(Button)`
  background-color: ${DefaultTheme.primaryColor};
  color: white;
  border: none;

  &:hover {
    background-color: ${DefaultTheme.primaryColorHover};
  }

  &:disabled {
    background-color: ${DefaultTheme.disabled};
    color: ${DefaultTheme.textOnDisabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

const SecondaryButton = styled(Button)`
  background: none;
  color: ${DefaultTheme.primaryColor};
  border: 2px solid ${DefaultTheme.primaryColor};

  &:hover {
    background-color: ${DefaultTheme.primaryColorHover};
  }

  &:disabled {
    border: none;
    background-color: ${DefaultTheme.disabled};
    color: ${DefaultTheme.textOnDisabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export { PrimaryButton, SecondaryButton };
