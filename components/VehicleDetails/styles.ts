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

export const Container = styled.div`
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 0;
  box-sizing: border-box;
  flex: 1;
`;

export const BottomSection = styled.div`
  margin-top: auto;
  width: 100%;
`;

export const ErrorMessage = styled.p`
  margin: 0 0 16px 0;
  font-size: 0.875rem;
  color: #dc2626;
`;
