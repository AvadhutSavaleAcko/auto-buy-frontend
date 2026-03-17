import React, { FC } from "react";
import {
  Block,
  QuestionRow,
  AvatarSlot,
  Avatar,
  QuestionBubble,
  QuestionText,
  ButtonsRow,
  YesButton,
  NoButton,
} from "./styles";

export type YesNoValue = "yes" | "no" | null;

export interface YesNoBlockProps {
  /** Question text to display */
  question: string;
  /** Current selection */
  value: YesNoValue;
  /** Called when user selects Yes or No */
  onChange: (value: "yes" | "no") => void;
  /** Avatar image URL. Defaults to /images/Avatar.svg */
  avatarSrc?: string;
  /** Optional id for the question (for aria) */
  questionId?: string;
}

const DEFAULT_AVATAR = "/images/Avatar.svg";

const YesNoBlock: FC<YesNoBlockProps> = ({
  question,
  value,
  onChange,
  avatarSrc = DEFAULT_AVATAR,
  questionId,
}) => {
  return (
    <Block role="group" aria-labelledby={questionId}>
      <QuestionRow>
        <AvatarSlot>
          <Avatar $src={avatarSrc} aria-hidden />
        </AvatarSlot>
        <QuestionBubble>
          <QuestionText id={questionId}>{question}</QuestionText>
        </QuestionBubble>
      </QuestionRow>
      <ButtonsRow role="radiogroup" aria-label={question}>
        <YesButton
          type="button"
          $selected={value === "yes"}
          onClick={() => onChange("yes")}
          aria-pressed={value === "yes"}
          aria-label="Yes"
        >
          Yes
        </YesButton>
        <NoButton
          type="button"
          $selected={value === "no"}
          onClick={() => onChange("no")}
          aria-pressed={value === "no"}
          aria-label="No"
        >
          No
        </NoButton>
      </ButtonsRow>
    </Block>
  );
};

export default YesNoBlock;
