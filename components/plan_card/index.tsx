import React from "react";
import {
  Card,
  CardInner,
  RecommendedTag,
  Content,
  Title,
  Description,
  DescriptionBold,
  PriceColumn,
  PricePrefix,
  Price,
} from "./styles";

export interface PlanCardProps {
  /** Plan name (e.g. "Third-party Plan") */
  title: string;
  /** Short description; use **text** for bold (e.g. coverage summary) */
  description: string;
  /** Display price (e.g. "₹3,500") */
  price: string;
  /** Optional prefix shown above price (e.g. "starts from") */
  pricePrefix?: string;
  /** Whether this plan is currently selected */
  selected?: boolean;
  /** Show "Recommended" tag */
  recommended?: boolean;
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
  pricePrefix,
  selected = false,
  recommended = false,
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
      {recommended && <RecommendedTag>Recommended</RecommendedTag>}
      <CardInner $hasRecommended={recommended}>
        <Content>
          <Title>{title}</Title>
          <Description>{parseDescriptionBold(description)}</Description>
        </Content>
        <PriceColumn>
          {pricePrefix && <PricePrefix>{pricePrefix}</PricePrefix>}
          <Price>{price}</Price>
        </PriceColumn>
      </CardInner>
    </Card>
  );
};

export default PlanCard;
