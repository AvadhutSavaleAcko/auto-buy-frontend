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

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #f1f1f5;
  flex-shrink: 0;
`;

export const DetailRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
`;

export const DetailLabel = styled.span`
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  color: #5b5675;
  flex: 1;
`;

export const DetailValue = styled.span`
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  color: #121212;
  text-align: right;
`;

export const NcbBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 3px;
  padding: 2px 8px;
  border-radius: 20px;
  background: rgba(15, 163, 87, 0.08);
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  color: #0fa357;
`;

export const NcbArrowUp = styled.span`
  font-size: 10px;
  line-height: 1;
`;

export const CoverageRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const CoverageCheckWrap = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
`;

export const CoverageLabel = styled.span`
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  color: #36354c;
`;

export const TotalRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding-top: 2px;
`;

export const TotalLabel = styled.span`
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 15px;
  font-weight: 700;
  line-height: 22px;
  color: #121212;
`;

export const TotalValue = styled.span`
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 15px;
  font-weight: 700;
  line-height: 22px;
  color: #121212;
`;

export const SummaryBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const SummaryPrimary = styled.span`
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: #121212;
`;

export const SummarySecondary = styled.span`
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  color: #5b5675;
`;

export const SummarySingle = styled.span`
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  color: #5b5675;
`;

export const PageTitle = styled.h1`
  color: var(--Text-Primary-grey600, #121212);
  font-family: "Euclid Circular B";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: -0.1px;
`;

export const CouponInputRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CouponInput = styled.input`
  flex: 1;
  padding: 10px 12px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: #121212;

  &::placeholder {
    color: #5b5675;
  }
`;

export const CouponApplyBtn = styled.button`
  padding: 10px 16px;
  border: none;
  background: none;
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #2563eb;
  cursor: pointer;
  flex-shrink: 0;

  &:hover {
    color: #1d4ed8;
  }
`;

export const CouponItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px 0;

  &:first-of-type {
    padding-top: 0;
  }
`;

export const CouponItemIcon = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
`;

export const CouponItemContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const CouponItemTitle = styled.span`
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: #121212;
`;

export const CouponItemSub = styled.span`
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: #5b5675;
`;

export const PolicyDateText = styled.span`
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont,
    sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  color: #5b5675;

  strong {
    font-weight: 600;
    color: #121212;
  }
`;
