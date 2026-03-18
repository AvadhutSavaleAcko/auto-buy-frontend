import React from "react";
import {
  SpecialPlanCardRoot,
  Badge,
  Content,
  MainContent,
  HeaderRow,
  TitleBlock,
  Subtitle,
  Title,
  PriceBlock,
  PricePrefix,
  Price,
  FeaturesList,
  FeatureItem,
  DashcamOffer,
  DashcamIcon,
  DashcamText,
  GaragesSection,
  GaragesTitle,
  GarageGrid,
  GarageCard,
  GarageOverlay,
  GarageName,
  ViewMoreLink,
} from "./styles";

export interface GarageItem {
  name: string;
  location: string;
  imageSrc?: string;
}

export interface SpecialPlanCardProps {
  badge?: string;
  subtitle?: string;
  title: string;
  pricePrefix?: string;
  price: string;
  features: string[];
  dashcamOfferText?: string;
  dashcamImageSrc?: string;
  garagesTitle?: string;
  garages: GarageItem[];
  viewMoreText?: string;
  onViewMore?: () => void;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
}

const SpecialPlanCard: React.FC<SpecialPlanCardProps> = ({
  badge = "ACKO Special",
  subtitle = "Comprehensive Zero Depreciation",
  title,
  pricePrefix = "starts from ",
  price,
  features,
  dashcamOfferText = "FREE dashcam ",
  dashcamImageSrc,
  garagesTitle = "Platinum garages near you",
  garages,
  viewMoreText = "View 24 more garages near you",
  onViewMore,
  selected = false,
  onClick,
  className,
  ariaLabel,
}) => {
  return (
    <SpecialPlanCardRoot
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
      {badge && <Badge>{badge}</Badge>}
      <Content>
        <MainContent>
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
          <FeaturesList>
            {features.map((f) => (
              <FeatureItem key={f}>{f}</FeatureItem>
            ))}
          </FeaturesList>
        </MainContent>

        <DashcamOffer>
          <DashcamIcon aria-hidden>
            {dashcamImageSrc ? (
              <img src={dashcamImageSrc} alt="" width={32} height={32} style={{ objectFit: "contain" }} />
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 4h12v8H2V4zm2 2v4h8V6H4z" fill="#757575" />
              </svg>
            )}
          </DashcamIcon>
          <DashcamText>{dashcamOfferText}</DashcamText>
        </DashcamOffer>

        <GaragesSection>
          <GaragesTitle>{garagesTitle}</GaragesTitle>
          <GarageGrid>
            {garages.map((g) => (
              <GarageCard key={`${g.name}-${g.location}`}>
                {g.imageSrc && (
                  <img
                    src={g.imageSrc}
                    alt={g.name}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                )}
                <GarageOverlay>
                  <GarageName>
                    {g.name},{"\n"}
                    {g.location}
                  </GarageName>
                </GarageOverlay>
              </GarageCard>
            ))}
          </GarageGrid>
          {onViewMore && (
            <ViewMoreLink
              type="button"
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                onViewMore();
              }}
            >
              {viewMoreText}
            </ViewMoreLink>
          )}
        </GaragesSection>
      </Content>
    </SpecialPlanCardRoot>
  );
};

export default SpecialPlanCard;
