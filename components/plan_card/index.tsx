import React from "react";
import { Card, Content, Title, Description, DescriptionBold, Price } from "./styles";

export interface PlanCardProps {
  /** Plan name (e.g. "Third-party Plan") */
  title: string;
  /** Short description; use **text** for bold (e.g. coverage summary) */
  description: string;
  /** Display price (e.g. "₹3,500" or "starts from ₹7,000") */
  price: string;
  /** Whether this plan is currently selected */
  selected?: boolean;
  /** Called when the card is clicked to select/deselect */
  onClick?: () => void;
  /** Optional className */
  className?: string;
  /** Optional aria-label for the card */
  ariaLabel?: string;
}

function parseDescriptionBold(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  const regex = /\*\*(.+?)\*\*/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(<DescriptionBold key={match.index}>{match[1]}</DescriptionBold>);
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts.length > 0 ? parts : text;
}

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  description,
  price,
  selected = false,
  onClick,
  className,
  ariaLabel,
}) => {
  return (
    <Card
      className={className}
      role="button"
      tabIndex={0}
      $selected={selected}
      onClick={onClick}
      onKeyDown={(e: React.KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.();
        }
      }}
      aria-pressed={selected}
      aria-label={ariaLabel ?? `${title} – ${price}`}
    >
      <Content>
        <Title>{title}</Title>
        <Description>{parseDescriptionBold(description)}</Description>
      </Content>
      <Price>{price}</Price>
    </Card>
  );
};

export default PlanCard;
