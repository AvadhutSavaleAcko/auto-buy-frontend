import styled from "styled-components";

export const Outer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
`;

export const Box = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #fff;
  overflow: hidden;

  @media (min-width: 768px) {
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.06);
    max-width: 400px;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 24px 24px;
  overflow-y: auto;
  box-sizing: border-box;
`;
