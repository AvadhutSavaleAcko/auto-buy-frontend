import { styled } from "@acko-tech/building-blocks.ui.common";

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 24px;
  padding-bottom: 88px;
  box-sizing: border-box;
`;

export const OptionsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SectionLabel = styled.h3`
  margin: 0 0 4px;
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #5b5675;
  text-transform: uppercase;
  letter-spacing: 0.04em;
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
    p.$selected ? "1.5px solid #0fa357" : "1px solid #e2e8f0"};
  background: ${(p: OptionCardProps) =>
    p.$selected
      ? "linear-gradient(135deg, rgba(253, 254, 255, 1) 0%, rgba(235, 251, 238, 1) 100%)"
      : "#ffffff"};
  box-shadow: ${(p: OptionCardProps) =>
    p.$selected
      ? "0 0 0 1px rgba(15, 164, 87, 0.25)"
      : "0 1px 3px 0 rgba(54, 53, 76, 0.08)"};
  cursor: pointer;
  transition: border-color 0.15s ease, box-shadow 0.15s ease,
    background 0.15s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  &:hover {
    box-shadow: 0 2px 8px rgba(15, 164, 87, 0.12);
  }
`;

export const OptionLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const DeductibleAmount = styled.span`
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: #121212;
`;

export const DeductibleDescription = styled.span`
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: #5b5675;
`;

interface DeductibleEffectProps {
  $positive?: boolean;
  $negative?: boolean;
}

export const DeductibleEffect = styled.span<DeductibleEffectProps>`
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 13px;
  font-weight: 600;
  line-height: 20px;
  color: ${(p: DeductibleEffectProps) => {
    if (p.$positive) return "#d93025";
    if (p.$negative) return "#0fa357";
    return "#5b5675";
  }};
`;

interface RadioDotProps {
  $selected?: boolean;
}

export const RadioDot = styled.div<RadioDotProps>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: ${(p: RadioDotProps) => (p.$selected ? "none" : "1.5px solid #c5c5d3")};
  background: ${(p: RadioDotProps) => (p.$selected ? "#0fa357" : "transparent")};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.15s ease, background 0.15s ease;

  &::after {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #fff;
    display: ${(p: RadioDotProps) => (p.$selected ? "block" : "none")};
  }
`;
