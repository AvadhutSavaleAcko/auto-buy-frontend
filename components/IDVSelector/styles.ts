import { styled } from "@acko-tech/building-blocks.ui.common";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 12px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #e7e7f0;
  border-radius: 16px;
  background: #fff;
`;

export const IdvDisplayRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  align-self: stretch;
  gap: 2px;
`;

export const IdvLabel = styled.span`
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5em;
  color: #5b5675;
`;

export const IdvAmount = styled.span`
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4em;
  letter-spacing: -0.5%;
  color: #5920c5;
`;

export const IdvUnit = styled.span`
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5em;
  color: #5b5675;
`;

export const SliderWrapper = styled.div`
  width: 100%;
  max-width: 296px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const SliderLabels = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const SliderLabel = styled.span`
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5em;
  color: #36354c;
`;

export const ResetButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5em;
  color: #a6a6a6;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #5b5675;
  }
`;
