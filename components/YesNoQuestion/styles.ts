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

export const OptionsRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

interface OptionButtonProps {
  $selected?: boolean;
}

export const OptionButton = styled.button<OptionButtonProps>`
  flex: 1;
  height: 56px;
  border-radius: 12px;
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  cursor: pointer;
  transition: border-color 0.15s ease, background 0.15s ease, color 0.15s ease,
    box-shadow 0.15s ease;
  border: ${(p: OptionButtonProps) =>
    p.$selected ? "1.5px solid #0fa357" : "1px solid #e2e8f0"};
  background: ${(p: OptionButtonProps) =>
    p.$selected
      ? "linear-gradient(135deg, rgba(235, 251, 238, 1) 0%, rgba(253, 254, 255, 1) 100%)"
      : "#ffffff"};
  color: ${(p: OptionButtonProps) => (p.$selected ? "#0fa357" : "#36354c")};
  box-shadow: ${(p: OptionButtonProps) =>
    p.$selected
      ? "0 0 0 1px rgba(15, 164, 87, 0.25)"
      : "0 1px 3px 0 rgba(54, 53, 76, 0.08)"};

  &:hover {
    border-color: #0fa357;
    background: rgba(15, 163, 87, 0.04);
  }
`;
