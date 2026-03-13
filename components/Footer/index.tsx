import React from "react";
import { FooterWrapper, PrimaryButton } from "./styles";

export interface FooterProps {
  /** Button label (e.g. "Okay") */
  label: string;
  /** Called when the primary button is clicked */
  onPrimaryClick: () => void;
  /** Disable the button (e.g. loading) */
  disabled?: boolean;
  /** Optional className */
  className?: string;
  /** Optional aria-label for the button */
  ariaLabel?: string;
}

const Footer: React.FC<FooterProps> = ({
  label,
  onPrimaryClick,
  disabled = false,
  className,
  ariaLabel,
}) => {
  return (
    <FooterWrapper className={className}>
      <PrimaryButton
        type="button"
        onClick={onPrimaryClick}
        disabled={disabled}
        aria-label={ariaLabel ?? label}
      >
        {label}
      </PrimaryButton>
    </FooterWrapper>
  );
};

export default Footer;
