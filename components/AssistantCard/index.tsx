import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Card,
  Avatar,
  AvatarSmall,
  AvatarSlot,
  MessageBubble,
  MessageText,
  MessageTextBold,
  MessageStack,
  BubbleRow,
  MessageLink,
  RegistrationPill,
  IndBadge,
  RegistrationNumber,
} from "./styles";
import { VEHICLE_DETAILS_PAGE_MESSAGES } from "../../config/assistantMessages";

const DEFAULT_AVATAR_SRC = "/images/Avatar.svg";
const MESSAGE_DELAY_MS = 2500;
/** Minimum time to show follow-up message before success when phase switches to "success". */
const MIN_FOLLOW_UP_DISPLAY_MS = 1000;

const INITIAL_MESSAGE = "Hi, I'm **Aparna**, I will help you find the right plan for your car";
const FOLLOW_UP_MESSAGE = "**Let me quickly get your car and policy details**";

/** Strip **bold** to plain text for typewriter. */
function stripBoldMarkdown(text: string): string {
  return text.replace(/\*\*(.+?)\*\*/g, "$1");
}

const TYPEWRITER_MS_PER_CHAR = 28;
const DELAY_BEFORE_NEXT_MS = 400;


export type AssistantCardPhase = "initial" | "loading" | "success";

export interface AssistantCardProps {
  /** Avatar image URL. Defaults to /images/Avatar.svg */
  avatarSrc?: string | null;
  /** When set, after ~2.5s the card switches to follow-up message and shows this in a pill (used when phase is not controlled) */
  registrationNumber?: string | null;
  /** Delay in ms before switching to follow-up state. Default 2500 */
  messageDelayMs?: number;
  /** Optional accessibility label */
  ariaLabel?: string;
  /** Controlled phase: "initial" | "loading" | "success". When set, overrides internal timing and shows the corresponding state. */
  phase?: AssistantCardPhase;
  /** Called when user taps "tap here" in the success message (buying for someone else). */
  onBuyingForSomeoneClick?: () => void;
  /**
   * Optional per-page message config for success phase.
   * When provided, these strings are shown as sequential typewriter bubbles (no link).
   * When omitted, default vehicle-details success messages (with "tap here" link) are used.
   */
  messages?: string[];
  /** Called when all messages have finished displaying (typewriter complete on last message). */
  onMessagesComplete?: () => void;
}

function parseBold(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  const regex = /\*\*(.+?)\*\*/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(<MessageTextBold key={match.index}>{match[1]}</MessageTextBold>);
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

function parseBoldWithLink(
  text: string,
  linkText: string,
  onLinkClick?: () => void
): React.ReactNode {
  const boldRegex = /\*\*(.+?)\*\*/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = boldRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const boldContent = match[1];
    if (boldContent.toLowerCase() === linkText.toLowerCase() && onLinkClick) {
      parts.push(
        <MessageLink key={match.index} onClick={onLinkClick} role="button">
          {boldContent}
        </MessageLink>
      );
    } else {
      parts.push(<MessageTextBold key={match.index}>{boldContent}</MessageTextBold>);
    }
    lastIndex = boldRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

const AssistantCard: React.FC<AssistantCardProps> = ({
  avatarSrc = DEFAULT_AVATAR_SRC,
  registrationNumber = null,
  messageDelayMs = MESSAGE_DELAY_MS,
  ariaLabel = "Assistant message",
  phase: controlledPhase,
  onBuyingForSomeoneClick,
  messages: customMessages,
  onMessagesComplete,
}) => {
  const [showFollowUp, setShowFollowUp] = useState(false);
  const [successStep, setSuccessStep] = useState(0);
  const [typewriterLen, setTypewriterLen] = useState(0);

  const { successMessages, successPlain, successCount, useCustomMessages } =
    useMemo(() => {
      const useCustom =
        customMessages != null && customMessages.length > 0;
      if (useCustom && customMessages) {
        return {
          successMessages: customMessages,
          successPlain: customMessages,
          successCount: customMessages.length,
          useCustomMessages: true,
        };
      }
      const messages = VEHICLE_DETAILS_PAGE_MESSAGES;
      return {
        successMessages: messages,
        successPlain: messages.map(stripBoldMarkdown),
        successCount: messages.length,
        useCustomMessages: false,
      };
    }, [customMessages]);

  useEffect(() => {
    if (controlledPhase != null) return;
    if (!registrationNumber?.trim()) return;
    const t = setTimeout(() => setShowFollowUp(true), messageDelayMs);
    return () => clearTimeout(t);
  }, [controlledPhase, registrationNumber, messageDelayMs]);

  const displayRegNo = registrationNumber?.trim() ?? "";
  const isControlled = controlledPhase != null;
  const effectivePhase: AssistantCardPhase = isControlled
    ? controlledPhase
    : showFollowUp && displayRegNo
      ? "loading"
      : "initial";

  const prevPhaseRef = useRef<AssistantCardPhase | null>(null);
  const completedRef = useRef(false);
  useEffect(() => {
    if (effectivePhase === "success" && prevPhaseRef.current !== "success") {
      const id = setTimeout(() => {
        setSuccessStep(0);
        setTypewriterLen(0);
      }, 0);
      prevPhaseRef.current = effectivePhase;
      return () => clearTimeout(id);
    }
    prevPhaseRef.current = effectivePhase;
  }, [effectivePhase]);

  useEffect(() => {
    if (effectivePhase !== "success") return;
    const plain = successPlain[successStep];
    const targetLen = plain.length;
    if (typewriterLen >= targetLen) {
      if (successStep >= successCount - 1) {
        if (!completedRef.current) {
          completedRef.current = true;
          onMessagesComplete?.();
        }
        return;
      }
      const t = setTimeout(() => {
        setSuccessStep((s) => s + 1);
        setTypewriterLen(0);
      }, DELAY_BEFORE_NEXT_MS);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setTypewriterLen((n) => n + 1), TYPEWRITER_MS_PER_CHAR);
    return () => clearTimeout(t);
  }, [effectivePhase, successStep, typewriterLen, successPlain, successCount, onMessagesComplete]);

  if (effectivePhase === "success") {
    const renderBubble = (stepIndex: number) => {
      const isCurrent = stepIndex === successStep;
      const plain = successPlain[stepIndex];
      const targetLen = plain.length;
      const isTyping = isCurrent && typewriterLen < targetLen;
      const visibleText = isTyping ? plain.slice(0, typewriterLen) : null;
      const hasLink =
        !useCustomMessages &&
        stepIndex === 2 &&
        onBuyingForSomeoneClick != null;
      if (hasLink) {
        return (
          <MessageText>
            {visibleText != null
              ? visibleText
              : parseBoldWithLink(
                  successMessages[stepIndex],
                  "tap here",
                  onBuyingForSomeoneClick
                )}
          </MessageText>
        );
      }
      return (
        <MessageText>
          {visibleText != null
            ? visibleText
            : parseBold(successMessages[stepIndex])}
        </MessageText>
      );
    };

    return (
      <Card role="article" aria-label={ariaLabel}>
        <MessageStack>
          {Array.from({ length: successCount }, (_, i) => (
            <React.Fragment key={i}>
              {successStep >= i && (
                <BubbleRow>
                  <AvatarSlot>
                    {successStep === i && (
                      <AvatarSmall $src={avatarSrc} aria-hidden />
                    )}
                  </AvatarSlot>
                  <MessageBubble>{renderBubble(i)}</MessageBubble>
                </BubbleRow>
              )}
            </React.Fragment>
          ))}
        </MessageStack>
      </Card>
    );
  }

  return (
    <Card role="article" aria-label={ariaLabel}>
      <Avatar $src={avatarSrc} aria-hidden />
      <MessageBubble>
        {effectivePhase === "initial" ? (
          <MessageText>{parseBold(INITIAL_MESSAGE)}</MessageText>
        ) : (
          <>
            <MessageText>{parseBold(FOLLOW_UP_MESSAGE)}</MessageText>
            <RegistrationPill>
              <IndBadge aria-hidden>IND</IndBadge>
              <RegistrationNumber>{displayRegNo}</RegistrationNumber>
            </RegistrationPill>
          </>
        )}
      </MessageBubble>
    </Card>
  );
};

export default AssistantCard;
