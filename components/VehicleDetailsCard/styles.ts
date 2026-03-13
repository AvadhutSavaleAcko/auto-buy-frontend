import { styled } from "@acko-tech/building-blocks.ui.common";

export const Card = styled.div`
  width: 100%;
  // max-width: 320px;
  border-radius: 12px;
  border: 1px solid #e0e0e8;
  background: linear-gradient(
    135deg,
    #fdfeff 0%,
    #fdf9e6 100%
  );
  overflow: hidden;
  box-sizing: border-box;
  margin-top: 100px;
`;

export const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border-radius: 16px 16px 0 0;
  background: transparent;
`;

export const CarImageWrap = styled.div`
  width: 80px;
  height: 45px;
  border-radius: 0;
  flex-shrink: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
`;

export const CarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  min-width: 0;
`;

export const RegistrationNumber = styled.span`
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: #121212;
`;

export const CarDescription = styled.span`
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #5b5675;
`;

export const Divider = styled.div`
  height: 0;
  border: none;
  border-top: 1px dashed #e0e0e8;
  margin: 0 12px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
`;

export const DetailRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

export const DetailLabel = styled.span`
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #5b5675;
  flex-shrink: 0;
`;

export const DetailValue = styled.span`
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #36354c;
  text-align: right;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 16px;
  gap: 0;
`;

export const PrimaryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  padding: 10px 16px;
  border: none;
  border-radius: 12px;
  background-color: #0fa357;
  color: #fff;
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  cursor: pointer;
  transition: opacity 0.2s ease, transform 0.1s ease;
  box-sizing: border-box;

  &:hover:not(:disabled) {
    opacity: 0.92;
  }

  &:active:not(:disabled) {
    transform: scale(0.99);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

/** Secondary link – blue, centered */
export const SecondaryLink = styled.button`
  margin: 0;
  padding: 16px;
  border: none;
  background: none;
  color: #1b73e8;
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #1557b0;
  }
`;
