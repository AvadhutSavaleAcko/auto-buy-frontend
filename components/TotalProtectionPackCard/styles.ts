import { styled } from "@acko-tech/building-blocks.ui.common";

interface CardProps {
  $selected?: boolean;
}

/** Root card – neutral when unselected; green border + green tint only when selected */
export const Card = styled.div<CardProps>`
  position: relative;
  width: 100%;
  min-height: 252px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4px;
  padding: 24px 16px 16px;
  border-radius: 12px;
  border: ${(p: CardProps) =>
    p.$selected ? "1px solid #0fa357" : "1px solid #e2e8f0"};
  background: ${(p: CardProps) =>
    p.$selected
      ? "linear-gradient(135deg, rgba(253, 254, 255, 1) 0%, rgba(235, 251, 238, 1) 100%)"
      : "#ffffff"};
  box-sizing: border-box;
  cursor: pointer;
  transition: border-color 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
  ${(p: CardProps) =>
    p.$selected &&
    `
    box-shadow: 0 0 0 1px rgba(15, 164, 87, 0.25);
  `}

  &:hover {
    box-shadow: ${(p: CardProps) =>
      p.$selected
        ? "0 0 0 0px rgba(15, 164, 87, 0.35)"
        : "0 2px 8px rgba(15, 164, 87, 0.12)"};
  }
`;

/** Recommended badge – absolute top-left, gradient (Figma Nudge) */
export const RecommendedBadge = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  height: 24px;
  border-radius: 8px 0 8px 0;
  background: linear-gradient(246deg, rgba(246, 105, 105, 1) 0%, rgba(116, 61, 220, 1) 100%);
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 10px;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: -0.01em;
  color: #ffffff;
`;

/** Top row – title (flex) and price (right) */
export const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  align-self: stretch;
`;

export const Title = styled.span`
  flex: 1;
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.25em;
  color: #121212;
  text-align: left;
`;

export const Price = styled.span`
  flex-shrink: 0;
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.25em;
  color: #121212;
  text-align: right;
`;

/** Subtext – Paragraph/X Small, secondary */
export const Subtext = styled.p`
  margin: 0;
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5em;
  color: #5b5675;
`;

/** Wrapper for feature chips – row wrap, 8px gap */
export const ChipsRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-self: stretch;
  gap: 8px;
`;

/** Single feature chip – icon + label (Figma Frame 1244832409 style) */
export const Chip = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  padding: 4px 6px;
  border-radius: 8px;
  background: #f0f0f6;
`;

export const ChipLabel = styled.span`
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5em;
  color: #451999;
`;

/** Learn more link row */
export const LearnMoreRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;

export const LearnMoreLink = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5em;
  color: #121212;
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 2px;

  &:hover {
    color: #0fa457;
  }
`;
