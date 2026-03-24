import React from "react";
import {
  Card,
  HeaderRow,
  CarImageWrap,
  CarImage,
  HeaderText,
  RegistrationNumber,
  CarDescription,
  Divider,
  Details,
  DetailRow,
  DetailLabel,
  DetailValue,
  Actions,
  PrimaryButton,
  SecondaryLink,
} from "./styles";

export interface DetailItem {
  label: string;
  value: string;
}

export interface VehicleDetailsCardProps {
  /** Car/thumbnail image URL */
  carImageSrc?: string | null;
  /** Registration number (e.g. KA05-EQ-8055) */
  registrationNumber: string;
  /** Car description (e.g. Hyundai Creta • SX • 2021) */
  carDescription: string;
  /** Detail rows: label + value (e.g. Estimated car value, Policy expiry date, NCB) */
  details: DetailItem[];
  /** Primary CTA label (e.g. "Yes, looks right") */
  primaryCtaLabel: string;
  /** Primary CTA click handler */
  onPrimaryCta: () => void;
  /** Secondary link label (e.g. "I want to edit details") */
  secondaryCtaLabel?: string | null;
  /** Secondary link click handler */
  onSecondaryCta?: () => void;
  /** Optional className */
  className?: string;
  /** Optional aria-label for the card */
  ariaLabel?: string;
  /** Disable primary button (e.g. loading) */
  primaryDisabled?: boolean;
}

const VehicleDetailsCard: React.FC<VehicleDetailsCardProps> = ({
  carImageSrc,
  registrationNumber,
  carDescription,
  details,
  primaryCtaLabel,
  onPrimaryCta,
  secondaryCtaLabel = "I want to edit details",
  onSecondaryCta,
  className,
  ariaLabel,
  primaryDisabled = false,
}) => {
  return (
    <Card
      className={className}
      role="article"
      aria-label={ariaLabel ?? "Proposal summary"}
    >
      <HeaderRow>
        {carImageSrc && (
          <CarImageWrap>
            <CarImage src={carImageSrc} alt="" aria-hidden />
          </CarImageWrap>
        )}
        <HeaderText>
          <RegistrationNumber>{registrationNumber}</RegistrationNumber>
          <CarDescription>{carDescription}</CarDescription>
        </HeaderText>
      </HeaderRow>

      <Divider />

      <Details>
        {details.map((item, index) => (
          <DetailRow key={index}>
            <DetailLabel>{item.label}</DetailLabel>
            <DetailValue>{item.value}</DetailValue>
          </DetailRow>
        ))}
      </Details>

      <Actions>
        <PrimaryButton
          type="button"
          onClick={onPrimaryCta}
          disabled={primaryDisabled}
        >
          {primaryCtaLabel}
        </PrimaryButton>
        {secondaryCtaLabel && onSecondaryCta && (
          <SecondaryLink type="button" onClick={onSecondaryCta}>
            {secondaryCtaLabel}
          </SecondaryLink>
        )}
      </Actions>
    </Card>
  );
};

export default VehicleDetailsCard;
