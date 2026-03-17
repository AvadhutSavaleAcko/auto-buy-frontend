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

export const ProposalContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 0;
  padding-bottom: 88px;
  box-sizing: border-box;
`;

export const TapToChoose = styled.p`
  margin: 0;
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #5b5675;
  text-align: center;
`;

export const PlanList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ErrorMessage = styled.p`
  margin: 0 0 16px 0;
  font-size: 0.875rem;
  color: #dc2626;
`;
