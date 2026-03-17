import React from "react";
import {
  Card,
  HeaderRow,
  TitlePriceGroup,
  CoverageTitle,
  CoveragePrice,
  CheckboxWrapper,
  Subtext,
} from "./styles";

const CheckboxIcon: React.FC<{ checked: boolean }> = ({ checked }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    {checked ? (
      <>
        <rect width="20" height="20" rx="4" fill="#0fa357" />
        <path
          d="M5 10.5l3 3L15 7"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ) : (
      <rect
        x="0.75"
        y="0.75"
        width="18.5"
        height="18.5"
        rx="3.25"
        fill="none"
        stroke="#c5c5d3"
        strokeWidth="1.5"
      />
    )}
  </svg>
);

export interface CoverageItemCardProps {
  /** Coverage name (e.g. "Return to Invoice Cover") */
  title: string;
  /** Price display (e.g. "₹800") */
  price: string;
  /** Short description of what the coverage does */
  description: string;
  /** Whether this coverage is currently selected */
  selected?: boolean;
  /** Called when card is clicked */
  onClick?: () => void;
  className?: string;
}

const CoverageItemCard: React.FC<CoverageItemCardProps> = ({
  title,
  price,
  description,
  selected = false,
  onClick,
  className,
}) => (
  <Card
    className={className}
    $selected={selected}
    role="checkbox"
    tabIndex={0}
    aria-checked={selected}
    onClick={onClick}
    onKeyDown={(e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onClick?.();
      }
    }}
  >
    <HeaderRow>
      <TitlePriceGroup>
        <CoverageTitle>{title}</CoverageTitle>
        <CoveragePrice>{price}</CoveragePrice>
      </TitlePriceGroup>
      <CheckboxWrapper>
        <CheckboxIcon checked={selected} />
      </CheckboxWrapper>
    </HeaderRow>
    <Subtext>{description}</Subtext>
  </Card>
);

export default CoverageItemCard;
