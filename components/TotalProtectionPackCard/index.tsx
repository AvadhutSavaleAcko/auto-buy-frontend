import React from "react";
import {
  Card,
  RecommendedBadge,
  HeaderRow,
  Title,
  Price,
  Subtext,
  ChipsRow,
  Chip,
  ChipLabel,
  LearnMoreRow,
  LearnMoreLink,
} from "./styles";

/** Simple 16x16 car icon matching Figma popular_Car usage in chips */
const CarIcon: React.FC = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M2 6.5L3.5 4h9L14 6.5v3h-1.5l-.5-1.5H4L3 9.5H2V6.5zm2 2a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"
      fill="#451999"
    />
  </svg>
);

export interface TotalProtectionPackCardProps {
  /** Plan name (e.g. "Total Protection Pack") */
  title: string;
  /** Display price (e.g. "₹1,800") */
  price: string;
  /** Short description below the title row */
  subtext: string;
  /** List of feature labels shown as chips (e.g. "Passenger Cover", "Personal Accident") */
  features: string[];
  /** Show "Recommended" badge in top-left */
  recommended?: boolean;
  /** Called when "Learn more" is clicked */
  onLearnMore?: () => void;
  /** Whether this plan is currently selected */
  selected?: boolean;
  /** Called when the card is clicked */
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
}

const TotalProtectionPackCard: React.FC<TotalProtectionPackCardProps> = ({
  title,
  price,
  subtext,
  features,
  recommended = false,
  onLearnMore,
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
      {recommended && <RecommendedBadge>Recommended</RecommendedBadge>}

      <HeaderRow>
        <Title>{title}</Title>
        <Price>{price}</Price>
      </HeaderRow>

      <Subtext>{subtext}</Subtext>

      <ChipsRow>
        {features.map((label) => (
          <Chip key={label}>
            <CarIcon />
            <ChipLabel>{label}</ChipLabel>
          </Chip>
        ))}
      </ChipsRow>

      {onLearnMore && (
        <LearnMoreRow>
          <LearnMoreLink
            type="button"
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              onLearnMore();
            }}
          >
            Learn more
          </LearnMoreLink>
        </LearnMoreRow>
      )}
    </Card>
  );
};

export default TotalProtectionPackCard;
