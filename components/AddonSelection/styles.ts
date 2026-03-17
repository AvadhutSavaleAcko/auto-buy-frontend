import { styled } from "@acko-tech/building-blocks.ui.common";

export const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  box-sizing: border-box;
  background: linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%);
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 24px;
  padding: 0;
  padding-bottom: 88px;
  box-sizing: border-box;
`;

export const PackSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

interface BuildYourOwnCardProps {
  $selected?: boolean;
}

export const BuildYourOwnCard = styled.div<BuildYourOwnCardProps>`
  width: 100%;
  padding: 20px 16px;
  box-sizing: border-box;
  background: #fff;
  border-radius: 12px;
  border: ${(p: BuildYourOwnCardProps) =>
    p.$selected ? "1px solid #0fa357" : "1px solid transparent"};
  box-shadow: 0 1px 3px 0 rgba(54, 53, 76, 0.08);
  cursor: pointer;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
  ${(p: BuildYourOwnCardProps) =>
    p.$selected &&
    `
    box-shadow: 0 0 0 0px rgba(15, 164, 87, 0.25);
  `}

  &:hover {
    box-shadow: 0 2px 8px rgba(15, 164, 87, 0.12);
  }
`;

export const BuildYourOwnTitle = styled.h2`
  margin: 0 0 4px 0;
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  color: #36354c;
`;

export const BuildYourOwnSubtitle = styled.p`
  margin: 0;
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #5b5675;
`;
