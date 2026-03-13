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
  // max-width: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 0;
  // padding-bottom: 220px;
  box-sizing: border-box;
`;

/** Fixed at bottom but constrained to content column (400px on desktop), with reduced side padding */
export const FixedBottomCardWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 400px;
  padding: 0 12px 20px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 0 16px 20px;
  }
`;

export const ErrorMessage = styled.p`
  margin: 0 0 16px 0;
  font-size: 0.875rem;
  color: #dc2626;
`;
