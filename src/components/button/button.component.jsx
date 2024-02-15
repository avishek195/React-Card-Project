import {
  BaseButton,
  GoogleSignButton,
  InvertedButton,
} from "./button.styles.jsx";
export const BUTTON_TYPE_CLASS = {
  base: "base",
  google: GoogleSignButton,
  inverted: InvertedButton,
};

const getButton = (buttonType = BUTTON_TYPE_CLASS.base) =>
  ({
    [BUTTON_TYPE_CLASS.base]: BaseButton,
    [BUTTON_TYPE_CLASS.google]: GoogleSignButton,
    [BUTTON_TYPE_CLASS.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
