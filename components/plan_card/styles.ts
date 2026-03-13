import { styled } from "@acko-tech/building-blocks.ui.common";

/** Root card – white bg, 16px radius, light border (Figma Frame 2085662492) */
export const Card = styled.div<{ $selected?: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  padding: 16px;
  border-radius: 16px;
  border: 1px solid ${(p: { $selected?: boolean }) => (p.$selected ? "#0066ff" : "#e7e7f0")};
  background: ${(p: { $selected?: boolean }) => (p.$selected ? "#f0f6ff" : "#ffffff")};
  box-sizing: border-box;
  cursor: pointer;
  transition: border-color 0.15s ease, background-color 0.15s ease;

  &:hover {
    border-color: ${(p: { $selected?: boolean }) => (p.$selected ? "#0066ff" : "#c4c4d4")};
  }
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

/** Price block – 16px Semibold, right-aligned (Figma "₹3,500") */
export const Price = styled.span`
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: #121212;
  text-align: right;
  flex-shrink: 0;
`;
