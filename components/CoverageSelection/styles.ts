import { styled } from "@acko-tech/building-blocks.ui.common";

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 16px;
  padding-bottom: 88px;
  box-sizing: border-box;
`;

export const SectionLabel = styled.h3`
  margin: 0;
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #5b5675;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;

export const CoverageList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SelectionSummary = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  border-radius: 8px;
  background: rgba(15, 163, 87, 0.06);
  border: 1px solid rgba(15, 163, 87, 0.2);
`;

export const SummaryText = styled.span`
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  color: #0fa357;
`;

export const SummaryCount = styled.span`
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 13px;
  font-weight: 600;
  line-height: 20px;
  color: #0fa357;
`;
