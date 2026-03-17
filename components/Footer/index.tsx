import React from "react";
import {
  FooterWrapper,
  FooterRow,
  FooterLeftLabel,
  FooterStack,
  PremiumSection,
  PremiumLabel,
  PremiumAmount,
  PremiumAmountRow,
  PremiumGst,
  PrimaryButton,
  SecondaryLink,
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
  /** Optional secondary CTA label (e.g. "Compare plans"); renders as link below primary button */
  secondaryLabel?: string;
  /** Called when secondary CTA is clicked */
  onSecondaryClick?: () => void;
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
  secondaryLabel,
  onSecondaryClick,
  className,
  ariaLabel,
}) => {
  const hasPremiumLayout = Boolean(premiumAmount);
  const hasLeftContent = hasPremiumLayout || Boolean(leftLabel);
  const hasSecondary = Boolean(secondaryLabel && onSecondaryClick);

  const content = (
    <>
      <PrimaryButton
        type="button"
        $compact={hasLeftContent && !hasSecondary}
        $inStack={hasSecondary}
        onClick={onPrimaryClick}
        disabled={disabled}
        aria-label={ariaLabel ?? label}
      >
        {label}
      </PrimaryButton>
      {hasSecondary && (
        <SecondaryLink
          type="button"
          onClick={onSecondaryClick}
          aria-label={secondaryLabel}
        >
          {secondaryLabel}
        </SecondaryLink>
      )}
    </>
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
          {hasSecondary ? <FooterStack>{content}</FooterStack> : content}
        </FooterRow>
      ) : hasSecondary ? (
        <FooterStack>{content}</FooterStack>
      ) : (
        content
      )}
    </FooterWrapper>
  );
};

export default Footer;
