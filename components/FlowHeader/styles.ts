import styled from "styled-components";

export const HeaderRoot = styled.header`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px 20px;
  flex-shrink: 0;
  border-bottom: 1px solid #f1f5f9;
  background: #fff;
`;

export const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0;
  border: none;
  background: transparent;
  color: #4f46e5;
  cursor: pointer;
  border-radius: 10px;
  flex-shrink: 0;
  transition: background-color 0.15s ease, color 0.15s ease;

  &:hover {
    background: #eef2ff;
    color: #4338ca;
  }

  &:active {
    background: #e0e7ff;
  }

  &:focus-visible {
    outline: 2px solid #4f46e5;
    outline-offset: 2px;
  }
`;

export const ProgressTrack = styled.div`
  width: 100%;
  height: 6px;
  background: #e2e8f0;
  overflow: hidden;
  margin-bottom: 16px;
`;

export const ProgressFill = styled.div<{ $percent: number }>`
  height: 100%;
  width: ${({ $percent }) => Math.min(100, Math.max(0, $percent))}%;
  background: #7c3aed;
  transition: width 0.25s ease;
`;

export const SummaryButton = styled.button`
  flex-shrink: 0;
  padding: 8px 16px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: #0f172a;
  background: #fff;
  border: 1px solid #0f172a;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;

  &:hover {
    background: #f1f5f9;
  }

  &:active {
    background: #e2e8f0;
  }

  &:focus-visible {
    outline: 2px solid #4f46e5;
    outline-offset: 2px;
  }
`;
