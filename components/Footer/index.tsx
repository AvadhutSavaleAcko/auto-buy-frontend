import React from "react";
import {
  FooterWrapper,
  FooterRow,
  FooterLeftLabel,
  PremiumSection,
  PremiumLabel,
  PremiumAmount,
  PremiumAmountRow,
  PremiumGst,
  PrimaryButton,
} from "./styles";

export interface FooterProps {
  /** Button label (e.g. "Okay") */
  label: string;
  /** Called when the primary button is clicked */
  onPrimaryClick: () => void;
  /** Disable the button (e.g. loading) */
  disabled?: boolean;
  /** Optional left-side label (legacy); when set, footer shows label + button row */
  leftLabel?: string;
  /** Premium amount (e.g. "₹12,000"); when set with gstText, uses new premium layout */
  premiumAmount?: string;
  /** GST text (e.g. "+18% GST"); use with premiumAmount for new layout */
  gstText?: string;
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
  premiumAmount,
  gstText,
  className,
  ariaLabel,
}) => {
  const hasPremiumLayout = Boolean(premiumAmount);
  const hasLeftContent = hasPremiumLayout || Boolean(leftLabel);

  const content = (
    <PrimaryButton
      type="button"
      $compact={hasLeftContent}
      onClick={onPrimaryClick}
      disabled={disabled}
      aria-label={ariaLabel ?? label}
    >
      {label}
    </PrimaryButton>
  );

  const leftContent = hasPremiumLayout ? (
    <PremiumSection>
      <PremiumLabel>Premium</PremiumLabel>
      <PremiumAmountRow>
        <PremiumAmount>{premiumAmount}</PremiumAmount>
        {gstText && <PremiumGst>{gstText}</PremiumGst>}
      </PremiumAmountRow>
    </PremiumSection>
  ) : leftLabel ? (
    <FooterLeftLabel>{leftLabel}</FooterLeftLabel>
  ) : null;

  return (
    <FooterWrapper className={className}>
      {leftContent ? (
        <FooterRow>
          {leftContent}
          {content}
        </FooterRow>
      ) : (
        content
      )}
    </FooterWrapper>
  );
};

export default Footer;
