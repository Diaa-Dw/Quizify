import { StyledButton } from "./button.style";

interface ButtonProps {
  children: React.ReactNode;
  color?: string;
  size?: string;
  rounded?: string;
  onClick?: () => void;
  disabled?: boolean;
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
      color={color}
      onClick={onClick}
      disabled={disabled}
      size={size}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
