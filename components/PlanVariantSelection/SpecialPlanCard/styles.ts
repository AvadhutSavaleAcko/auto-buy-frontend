import { styled } from "@acko-tech/building-blocks.ui.common";

export interface SpecialPlanCardRootProps {
  $selected?: boolean;
}

export const SpecialPlanCardRoot = styled.div<SpecialPlanCardRootProps>`
  position: relative;
  width: 100%;
  padding: 24px 16px;
  box-sizing: border-box;
  background: ${(p: SpecialPlanCardRootProps) => (p.$selected ? "rgba(235, 251, 238, 0.5)" : "#ffffff")};
  border: 1px solid ${(p: SpecialPlanCardRootProps) => (p.$selected ? "#0FA457" : "#E7E7F0")};
  border-radius: 16px;
  cursor: pointer;
  transition: border-color 0.15s ease, background 0.15s ease;

  &:hover {
    border-color: ${(p: SpecialPlanCardRootProps) => (p.$selected ? "#0FA457" : "#c4c4d4")};
  }
  margin-top: 20px;
`;

export const Badge = styled.span`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 4px 12px;
  border-radius: 20px;
  border: 2px solid var(--background-white-n-0, #fff);
  background: var(--background-secondary-n-50, #f8f7fc);
`;

export const BadgeText = styled.span`
  background: linear-gradient(269deg, #f16262 -10.35%, #743ddc 106.34%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
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
  font-weight: 500;
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
`;

export const FeatureItem = styled.span`
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: #36354c;
`;

export const DashcamOffer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  padding: 4px 8px;
  border-radius: 12px;
  border: 1px solid #F5B7FF;
  background: linear-gradient(276deg, rgba(255, 255, 255, 0.80) 0.25%, rgba(255, 255, 255, 0.80) 99.71%);
  backdrop-filter: blur(10px);
`;

export const DashcamIcon = styled.div`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  background: #d9d9d9;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DashcamText = styled.span`
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5;
  color: #36354c;
`;

export const GaragesSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const GaragesTitle = styled.span`
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.88);
`;

export const GarageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`;

export const GarageCard = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 1.44;
  min-height: 100px;
  background: linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%);
`;

export const GarageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 8px;
  background: linear-gradient(
    39deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(31, 36, 40, 1) 96%
  );
  border-radius: 0 0 8px 8px;
`;

export const GarageName = styled.span`
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5;
  color: #ffffff;
  white-space: pre-line;
`;

export const ViewMoreLink = styled.button`
  background: none;
  border: none;
  padding: 0;
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5;
  color: #1b73e8;
  cursor: pointer;
  text-align: left;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.85;
  }
`;
