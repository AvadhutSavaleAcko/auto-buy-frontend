import { styled } from "@acko-tech/building-blocks.ui.common";

export const Card = styled.div`
  width: 100%;
  padding: 0;
  box-sizing: border-box;
  background: #fff;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px 0 rgba(54, 53, 76, 0.08);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const HeaderSection = styled.div`
  padding: 16px;
  background: #f9f6ff;
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const ContentSection = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

interface HeaderRowProps {
  $clickable?: boolean;
}

export const HeaderRow = styled.div<HeaderRowProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: ${(p: HeaderRowProps) => (p.$clickable ? "pointer" : "default")};
  user-select: none;
`;

export const TitleGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  min-width: 0;
`;

export const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`;

export const Title = styled.span`
  color: var(--text-primary-n-600, #040222);
  font-family: "Euclid Circular B";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const EditButton = styled.button`
  padding: 0;
  border: none;
  background: none;
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  color: #451999;
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 2px;
  flex-shrink: 0;

  &:hover {
    color: #2e0fa8;
  }
`;

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 20px;
  background: rgba(15, 163, 87, 0.08);
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  color: #0fa357;
  flex-shrink: 0;
`;

interface ChevronWrapProps {
  $open?: boolean;
}

export const ChevronWrap = styled.div<ChevronWrapProps>`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  color: #36354c;
  transition: transform 0.2s ease;
  transform: ${(p: ChevronWrapProps) =>
    p.$open ? "rotate(180deg)" : "rotate(0deg)"};
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #f1f1f5;
  flex-shrink: 0;
`;
