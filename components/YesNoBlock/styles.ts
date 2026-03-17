import styled from "styled-components";

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 12px;
  width: 100%;
`;

export const QuestionRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  width: 100%;
`;

export const AvatarSlot = styled.div`
  width: 40px;
  min-width: 40px;
  flex-shrink: 0;
`;

export const Avatar = styled.div<{ $src?: string }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #eeebfa;
  background-image: ${(p) => (p.$src ? `url(${p.$src})` : "none")};
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
`;

export const QuestionBubble = styled.div`
  flex: 1;
  max-width: 334px;
  padding: 12px;
  background: linear-gradient(135deg, #fdfeff 0%, #f4f1fc 100%);
  border-radius: 2px 12px 12px 12px;
  box-shadow: 0 6px 12px -2px rgba(54, 53, 76, 0.2);
  box-sizing: border-box;
`;

export const QuestionText = styled.p`
  margin: 0;
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #121212;
`;

export const ButtonsRow = styled.div`
  display: flex;
  gap: 10px;
  margin-left: 72px; 
  width: fit-content;
  max-width: 334px;
`;

interface ButtonProps {
  $selected?: boolean;
  $disabled?: boolean;
}

export const YesButton = styled.button<ButtonProps>`
  min-width: 80px;
  height: 40px;
  padding: 0 20px;
  border-radius: 10px;
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  cursor: ${(p) => (p.$disabled ? "default" : "pointer")};
  pointer-events: ${(p) => (p.$disabled ? "none" : "auto")};
  transition: border-color 0.15s ease, background 0.15s ease, color 0.15s ease;
  border: ${(p) => (p.$selected ? "none" : "1px solid #e2e8f0")};
  background: ${(p) => (p.$selected ? "#0fa357" : "#ffffff")};
  color: ${(p) => (p.$selected ? "#ffffff" : "#36354c")};

  &:hover {
    border-color: #0fa357;
    background: ${(p) => (p.$selected ? "#0fa357" : "rgba(15, 163, 87, 0.04)")};
  }
`;

export const NoButton = styled.button<ButtonProps>`
  min-width: 80px;
  height: 40px;
  padding: 0 20px;
  border-radius: 10px;
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  cursor: ${(p) => (p.$disabled ? "default" : "pointer")};
  pointer-events: ${(p) => (p.$disabled ? "none" : "auto")};
  transition: border-color 0.15s ease, background 0.15s ease, color 0.15s ease;
  border: ${(p) => (p.$selected ? "none" : "1px solid #e2e8f0")};
  background: ${(p) => (p.$selected ? "#0fa357" : "#ffffff")};
  color: ${(p) => (p.$selected ? "#ffffff" : "#36354c")};

  &:hover {
    border-color: #0fa357;
    background: ${(p) => (p.$selected ? "#0fa357" : "rgba(15, 163, 87, 0.04)")};
  }
`;
