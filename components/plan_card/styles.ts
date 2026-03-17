import { styled } from "@acko-tech/building-blocks.ui.common";

/** Root card – white bg, 16px radius, light border (Figma Frame 2085662492) */
export const Card = styled.div<{ $selected?: boolean }>`
  position: relative;
  width: 100%;
  border-radius: 16px;
  border: 1px solid ${(p: { $selected?: boolean }) =>
    p.$selected ? "var(--Green-G300, #0FA457)" : "#e7e7f0"};
  background: ${(p: { $selected?: boolean }) =>
    p.$selected
      ? "linear-gradient(122deg, #FDFEFF 0%, #EBFBEE 100%)"
      : "#ffffff"};
  box-sizing: border-box;
  cursor: pointer;
  transition: border-color 0.15s ease, background 0.15s ease;
  overflow: hidden;

  &:hover {
    border-color: ${(p: { $selected?: boolean }) =>
      p.$selected ? "var(--Green-G300, #0FA457)" : "#c4c4d4"};
  }
`;

/** Recommended tag – top-right corner */
export const RecommendedTag = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  padding: 4px 12px;
  border-radius: 0 12px;
  background: var(--Green-G300, #0FA457);
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  color: #fff;
`;

/** Inner content row – title/description + price */
export const CardInner = styled.div<{ $hasRecommended?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  padding: 16px;
  padding-top: ${(p: { $hasRecommended?: boolean }) =>
    p.$hasRecommended ? "28px" : "16px"};
`;

/** Left column – title + description vertical stack, 4px gap */
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
  flex: 1;
`;

/** Plan title – 16px Semibold, primary text (Figma "Title") */
export const Title = styled.span`
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: #121212;
`;

/** Plan description – 12px Regular, secondary text */
export const Description = styled.span`
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #5b5675;
`;

/** Bold segment inside description (use with **text** in description string) */
export const DescriptionBold = styled.span`
  font-weight: 700;
`;

/** Price column – right-aligned, stacks "starts from" above price */
export const PriceColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0;
  flex-shrink: 0;
`;

/** "starts from" label – tertiary grey, 12px semibold */
export const PricePrefix = styled.span`
  color: var(--Text-Tertiary-grey300, #757575);
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
`;

/** Price block – 16px Semibold, right-aligned (Figma "₹3,500") */
export const Price = styled.span`
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: #121212;
  text-align: right;
`;
