import React from "react";
import {
  BasicPlanCardRoot,
  Content,
  HeaderRow,
  TitleBlock,
  Subtitle,
  Title,
  PriceBlock,
  PricePrefix,
  Price,
  FeaturesList,
} from "./styles";

export interface BasicPlanCardProps {
  subtitle?: string;
  title: string;
  pricePrefix?: string;
  price: string;
  features: string[];
  selected?: boolean;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
}

const BasicPlanCard: React.FC<BasicPlanCardProps> = ({
  subtitle = "Comprehensive Zero Depreciation",
  title,
  pricePrefix = "starts from ",
  price,
  features,
  selected = false,
  onClick,
  className,
  ariaLabel,
}) => {
  const featuresText = features.join("\n");

  return (
    <BasicPlanCardRoot
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
        <HeaderRow>
          <TitleBlock>
            <Subtitle>{subtitle}</Subtitle>
            <Title>{title}</Title>
          </TitleBlock>
          <PriceBlock>
            <PricePrefix>{pricePrefix}</PricePrefix>
            <Price>{price}</Price>
          </PriceBlock>
        </HeaderRow>
        <FeaturesList>{featuresText}</FeaturesList>
      </Content>
    </BasicPlanCardRoot>
  );
};

export default BasicPlanCard;
