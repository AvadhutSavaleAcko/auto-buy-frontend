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
  margin-left: 120px;
`;

interface OptionButtonProps {
  $selected?: boolean;
  $disabled?: boolean;
}

export const OptionButton = styled.button<OptionButtonProps>`
  min-width: 98px;
  height: 40px;
  padding: 0 20px;
  border-radius: 12px;
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  cursor: ${(p: OptionButtonProps) => (p.$disabled ? "default" : "pointer")};
  pointer-events: ${(p: OptionButtonProps) => (p.$disabled ? "none" : "auto")};
  border: none;
  background: ${(p: OptionButtonProps) => (p.$selected ? "#000000" : "linear-gradient(122deg, #FDFEFF 0%, #F4F1FC 100%)")};
  color: ${(p: OptionButtonProps) => (p.$selected ? "#ffffff" : "#36354c")};
  box-shadow: 0 6px 12px -2px rgba(54, 53, 76, 0.20);

  &:hover {
    background: ${(p: OptionButtonProps) => (p.$selected ? "#000000" : "rgba(15, 163, 87, 0.04)")};
  }
`;
