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

export const SelectorSection = styled.div`
  position: fixed;
  bottom: 120px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 400px;
  padding: 0 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 5;
  background: #fff;
`;
