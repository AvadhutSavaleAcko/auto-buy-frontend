import { styled } from "@acko-tech/building-blocks.ui.common";

export const ContentContainer = styled.div`
  width: 100%;
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-sizing: border-box;
`;

export const MessagesScrollArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-bottom: 220px;
  min-height: 0;
`;

export const OptionsSection = styled.div`
  position: fixed;
  bottom: 120px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 400px;
  padding: 0 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 5;
  background: #fff;
`;

interface OptionCardProps {
  $selected?: boolean;
}

export const OptionCard = styled.div<OptionCardProps>`
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 12px;
  border: ${(p: OptionCardProps) =>
    p.$selected ? "1px solid #0fa357" : "1px solid #e2e8f0"};
  background: ${(p: OptionCardProps) =>
    p.$selected ? "rgba(255, 255, 255, 0.6)" : "#ffffff"};
  cursor: pointer;
  transition: border-color 0.01s ease, background 0.08s ease;
  display: flex;
  align-items: center;

  &:hover {
    background: ${(p: OptionCardProps) =>
      p.$selected ? "rgba(235, 251, 238, 0.6)" : "#f0f1f3"};
  }
`;

interface OptionContentProps {
  $selected?: boolean;
}

export const OptionContent = styled.div<OptionContentProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  justify-content: ${(p: OptionContentProps) =>
    p.$selected ? "center" : "flex-start"};
`;

export const DeductibleAmount = styled.span`
  color: var(--text-primary-n-600, #040222);
  font-family: "Euclid Circular B";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const DeductibleEffect = styled.span`
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  color: #7c7a99;
`;
