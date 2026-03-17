import React from "react";
import { FooterWrapper, FooterRow, FooterLeftLabel, PrimaryButton } from "./styles";

export interface FooterProps {
  /** Button label (e.g. "Okay") */
  label: string;
  /** Called when the primary button is clicked */
  onPrimaryClick: () => void;
  /** Disable the button (e.g. loading) */
  disabled?: boolean;
  /** Optional left-side label (e.g. "Premium ₹10,200 +18% GST"); when set, footer shows label + button row */
  leftLabel?: string;
  /** Optional className */
  className?: string;
  /** Optional aria-label for the button */
  ariaLabel?: string;
}

const Footer: React.FC<FooterProps> = ({
  label,
  onPrimaryClick,
  disabled = false,
  leftLabel,
  className,
  ariaLabel,
}) => {
  const content = (
    <PrimaryButton
      type="button"
      $compact={Boolean(leftLabel)}
      onClick={onPrimaryClick}
      disabled={disabled}
      aria-label={ariaLabel ?? label}
    >
      {label}
    </PrimaryButton>
  );

  return (
    <FooterWrapper className={className}>
      {leftLabel ? (
        <FooterRow>
          <FooterLeftLabel>{leftLabel}</FooterLeftLabel>
          {content}
        </FooterRow>
      ) : (
        content
      )}
    </FooterWrapper>
  );
};

export default Footer;
