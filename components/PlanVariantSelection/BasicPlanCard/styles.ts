import { styled } from "@acko-tech/building-blocks.ui.common";

export interface BasicPlanCardRootProps {
  $selected?: boolean;
}

export const BasicPlanCardRoot = styled.div<BasicPlanCardRootProps>`
  position: relative;
  width: 100%;
  padding: 12px;
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid ${(p: BasicPlanCardRootProps) => (p.$selected ? "#0FA457" : "#E7E7F0")};
  border-radius: 16px;
  box-shadow: 0px 2px 16px -1px rgba(0, 0, 0, 0.02),
    inset 0px 0px 8px 1px rgba(255, 255, 255, 0.56);
  cursor: pointer;
  transition: border-color 0.15s ease, background 0.15s ease;

  &:hover {
    border-color: ${(p: BasicPlanCardRootProps) => (p.$selected ? "#0FA457" : "#c4c4d4")};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
`;

export const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  min-width: 0;
`;

export const Subtitle = styled.span`
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.33;
  color: #757575;
`;

export const Title = styled.span`
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.875;
  color: #121212;
`;

export const PriceBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

export const PricePrefix = styled.span`
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.33;
  color: #757575;
  text-align: right;
`;

export const Price = styled.span`
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.875;
  color: #121212;
  text-align: right;
`;

export const FeaturesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  white-space: pre-line;
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: #36354c;
`;
