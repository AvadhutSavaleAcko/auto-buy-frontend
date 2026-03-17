import { styled } from "@acko-tech/building-blocks.ui.common";

export const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%);
`;

export const RegistrationContainer = styled.div`
  width: 100%;
  max-width: 420px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.06);
  padding: 40px 32px;
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 32px;
`;

export const Title = styled.h1`
  margin: 0 0 8px 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: #0f172a;
  letter-spacing: -0.02em;
  line-height: 1.3;
`;

export const Subtitle = styled.p`
  margin: 0;
  font-size: 0.9375rem;
  color: #64748b;
  line-height: 1.5;
`;

export const RegistrationForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: #334155;
`;

export const RegistrationInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  height: 48px;
  padding: 0 16px;
  font-size: 1rem;
  color: #0f172a;
  background: #fff;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  outline: none;

  &::placeholder {
    color: #94a3b8;
  }
`;

export const Hint = styled.span`
  font-size: 0.8125rem;
  color: #94a3b8;
`;

export const RegistrationButton = styled.button`
  height: 48px;
  width: 100%;
  margin-top: 8px;
  border: none;
  border-radius: 10px;
  background-color: rgb(15, 40, 164);
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;

  &:hover:not(:disabled) {
    background-color: rgb(15, 40, 164);
  }

  &:active:not(:disabled) {
    transform: scale(0.99);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.p`
  margin: 0 0 16px 0;
  font-size: 0.875rem;
  color: #dc2626;
`;
