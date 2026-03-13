import { styled } from "@acko-tech/building-blocks.ui.common";

/** Root card – gradient, border, 12px radius */
export const Card = styled.div`
  width: 100%;
  // max-width: 320px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 12px;
  border: 1px solid rgba(237, 233, 251, 1);
  background: linear-gradient(
    135deg,
    rgba(253, 255, 254, 1) 0%,
    rgba(244, 241, 252, 1) 100%
  );
  box-sizing: border-box;
  margin-bottom: 32px;
`;

/** Single field group: label + input + helper (vertical, 12px gap) */
export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: stretch;
`;

export const Label = styled.label`
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: #121212;
  display: block;
`;

export const InputWrap = styled.div`
  width: 100%;
  height: 48px;
  border-radius: 12px;
  border: 1px solid #ebebeb;
  background: #ffffff;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 0 12px;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #121212;

  &::placeholder {
    color: #a6a6a6;
  }
`;

export const Helper = styled.span`
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: #4b4b4b;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

/** Primary CTA – 48px height, 12px radius. Green when enabled (both phone + pincode filled). */
export const PrimaryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  padding: 10px 16px;
  border: none;
  border-radius: 12px;
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  cursor: pointer;
  transition: opacity 0.2s ease, transform 0.1s ease, background-color 0.2s ease;
  box-sizing: border-box;

  &:not(:disabled) {
    background-color: #0fa357;
    color: #fff;
  }

  &:hover:not(:disabled) {
    opacity: 0.92;
  }

  &:active:not(:disabled) {
    transform: scale(0.99);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background-color: #cee1db;
    color: #fff;
  }
`;
