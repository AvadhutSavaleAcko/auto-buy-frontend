import { styled } from "@acko-tech/building-blocks.ui.common";

interface CardProps {
  $selected?: boolean;
}

export const Card = styled.div<CardProps>`
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 12px;
  border: ${(p: CardProps) =>
    p.$selected ? "1px solid #0fa357" : "1px solid #e2e8f0"};
  background: ${(p: CardProps) =>
    p.$selected
      ? "linear-gradient(135deg, rgba(253, 254, 255, 1) 0%, rgba(235, 251, 238, 1) 100%)"
      : "#ffffff"};
  box-shadow: ${(p: CardProps) =>
    p.$selected
      ? "0 0 0 1px rgba(15, 164, 87, 0.25)"
      : "0 1px 3px 0 rgba(54, 53, 76, 0.08)"};
  cursor: pointer;
  transition: border-color 0.15s ease, background 0.15s ease,
    box-shadow 0.15s ease;
  display: flex;
  flex-direction: column;
  gap: 6px;

  &:hover {
    box-shadow: 0 2px 8px rgba(15, 164, 87, 0.12);
  }
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`;

export const TitlePriceGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
`;

export const CoverageTitle = styled.span`
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 15px;
  font-weight: 600;
  line-height: 22px;
  color: #121212;
`;

export const CoveragePrice = styled.span`
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
  color: #36354c;
`;

export const CheckboxWrapper = styled.div`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Subtext = styled.p`
  margin: 0;
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: #5b5675;
`;
