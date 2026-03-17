import { styled } from "@acko-tech/building-blocks.ui.common";

/** Fixed at bottom of viewport, constrained to content column. Use for primary CTA (e.g. Okay). */
export const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 400px;
  padding: 0 12px 20px;
  box-sizing: border-box;
  background: #fff;
  z-index: 10;
  box-shadow: 0 -4px 8px 0 rgba(54, 53, 76, 0.06);
  @media (min-width: 768px) {
    padding: 0 16px 20px;
  }
`;

/** Row for footer when leftLabel is used: left text, right button. */
export const FooterRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 12px;
`;

/** Left-side label (e.g. premium summary) – legacy single-line style. */
export const FooterLeftLabel = styled.span`
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #36354c;
  flex-shrink: 0;
`;

/** Premium section container when using premiumAmount + gstText layout. */
export const PremiumSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex-shrink: 0;
`;

/** "Premium" label – grey, small. */
export const PremiumLabel = styled.span`
  color: var(--Text-Tertiary-grey300, #757575);
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`;

/** Premium amount – black, bold, large. */
export const PremiumAmount = styled.span`
  color: var(--Black, #000);
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.1px;
`;

/** GST text – grey, small, inline with amount. */
export const PremiumGst = styled.span`
  color: var(--Text-Tertiary-grey300, #757575);
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`;

/** Wrapper for amount + GST on same line. */
export const PremiumAmountRow = styled.span`
  display: inline-flex;
  align-items: baseline;
  gap: 4px;
`;

interface PrimaryButtonProps {
  $compact?: boolean;
}

/** Primary CTA – full width when alone, or flex when in row; green, 48px height. */
export const PrimaryButton = styled.button<PrimaryButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(p: PrimaryButtonProps) => (p.$compact ? "auto" : "100%")};
  min-width: ${(p: PrimaryButtonProps) => (p.$compact ? "120px" : "none")};
  height: 48px;
  padding: 10px 16px;
  margin-top: ${(p: PrimaryButtonProps) => (p.$compact ? "0" : "12px")};
  border: none;
  border-radius: 12px;
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  cursor: pointer;
  transition: opacity 0.2s ease, transform 0.1s ease, background-color 0.2s ease;
  box-sizing: border-box;
  &:not(:disabled) {
    background-color: #0fa357;
    color: #fff;
  }

  &:hover:not(:disabled) {
    opacity: 0.92;
  }

  &:active:not(:disabled) {
    transform: scale(0.99);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background-color: #cee1db;
    color: #fff;
  }
`;
