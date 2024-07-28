import { StyledButton } from "./button.style";

interface ButtonProps {
  children: React.ReactNode;
  color: string;
  size: string;
  rounded: string;
}

function Button({
  children,
  color,
  size = "large",
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <StyledButton
      size={size}
      color={color}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
