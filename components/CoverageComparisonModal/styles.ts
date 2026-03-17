import styled from "styled-components";

export const TableWrapper = styled.div`
  background: #f5f5f5;
  border-radius: 16px;
  box-shadow: 0 2px 16px -1px rgba(0, 0, 0, 0.02),
    inset 0 0 8px 1px rgba(255, 255, 255, 0.56),
    inset 0 -4px 4px -8px rgba(0, 0, 0, 0.02),
    inset 0 -1px 2px 0 rgba(0, 0, 0, 0.02);
  overflow: hidden;
`;

export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
`;

export const TableHeaderCell = styled.div<{ $highlight?: boolean; $spacer?: boolean }>`
  flex: ${(p) => (p.$spacer ? "1 1 120px" : "0 0 90px")};
  min-width: ${(p) => (p.$spacer ? "100px" : "80px")};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 12px;
  font-weight: ${(p) => (p.$highlight ? 600 : 500)};
  line-height: 1.5;
  color: ${(p) => (p.$highlight ? "#6815E4" : "rgba(0, 0, 0, 0.88)")};
  background: ${(p) =>
    p.$highlight ? "rgba(153, 116, 249, 0.08)" : "transparent"};
`;

export const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
`;

export const FeatureCell = styled.div`
  flex: 1 1 120px;
  min-width: 100px;
  display: flex;
  align-items: center;
  padding: 8px 12px;
  min-height: 60px;
  box-sizing: border-box;
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.88);
`;

export const IconCell = styled.div<{ $highlight?: boolean }>`
  flex: 0 0 90px;
  min-width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  min-height: 60px;
  box-sizing: border-box;
  background: ${(p) =>
    p.$highlight ? "rgba(153, 116, 249, 0.08)" : "#fff"};
`;

export const OkayButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 2;
  letter-spacing: 0.00625em;
  color: #fff;
  background: #0fa457;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.92;
  }

  &:active {
    opacity: 0.9;
  }
`;
