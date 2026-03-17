import styled from "styled-components";

export const ModalHeading = styled.div`
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: -0.005em;
  color: #040222;
  margin: 0;
`;

export const ChildrenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
`;

export const ModalStickyFooter = styled.div`
  flex-shrink: 0;
  padding: 12px 20px 20px;
  background: #fff;
`;
