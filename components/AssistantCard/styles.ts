import { styled } from "@acko-tech/building-blocks.ui.common";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: fit-content;
  // max-width: 320px;
`;

type AvatarProps = { $src?: string | null };

export const Avatar = styled.div<AvatarProps>`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #eeebfa;
  background-image: ${({ $src }: AvatarProps) => ($src ? `url(${$src})` : "none")};
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
`;

export const MessageBubble = styled.div`
  max-width: 334px;
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, #fdfeff 0%, #f4f1fc 100%);
  border-radius: 2px 12px 12px 12px;
  box-shadow: 0 6px 12px -2px rgba(54, 53, 76, 0.2);
  box-sizing: border-box;
`;

export const MessageText = styled.p`
  margin: 0;
  font-family: "Euclid Circular B", -apple-system, BlinkMacSystemFont, "Segoe UI",
    system-ui, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #121212;
  letter-spacing: 0;

  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const MessageTextBold = styled.span`
  font-weight: 600;
`;

export const RegistrationPill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: #f1f5f9;
  border: 1px solid #c4b5fd;
  border-radius: 8px;
  margin-top: 4px;
`;

export const IndBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: #3b82f6;
  border-radius: 4px;
  color: #fff;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.02em;
`;

export const RegistrationNumber = styled.span`
  font-family: "Euclid Circular B", system-ui, sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #121212;
  letter-spacing: 0.02em;
`;

/** Stack of message bubbles for success phase (e.g. chat-style right-aligned) */
export const MessageStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  max-width: 334px;
`;

/** Wrapper for last bubble + small avatar in success state (avatar left of bubble) */
export const LastBubbleRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  width: 100%;
  justify-content: flex-end;
`;

/** Fixed-width slot so every row keeps bubbles in one column (avatar or empty) */
export const AvatarSlot = styled.div`
  width: 40px; /* 32px avatar + 8px gap */
  flex-shrink: 0;
  min-width: 40px;
`;

/** Row for one message bubble with reserved avatar slot (keeps all bubbles left-aligned) */
export const BubbleRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  width: 100%;
`;

export const AvatarSmall = styled(Avatar)`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
`;

export const MessageLink = styled.span`
  font-weight: 600;
  color: #6366f1;
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    color: #4f46e5;
  }
`;
