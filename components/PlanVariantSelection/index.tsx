import React, { useState } from "react";
import { ContentContainer, CardsSection } from "./styles";
import PageBoxLayout from "../PageBoxLayout";
import FlowHeader from "../FlowHeader";
import Footer from "../Footer";
import BasicPlanCard from "./BasicPlanCard";
import SpecialPlanCard from "./SpecialPlanCard";
import type { GarageItem } from "./SpecialPlanCard";
import { useFlowNavigation } from "../../hooks/useFlowNavigation";

export type PlanVariant = "basic" | "platinum" | null;

const BASIC_FEATURES = [
  "Cashless claims at any GST-registered garage of your choice",
  "24x7 claim support on app",
];

const PLATINUM_FEATURES = [
  "All benefits of Standard",
  "Repairs at Platinum-certified garages",
  "Doorstep pickup and drop",
  "1-year warranty on all repairs",
  "Dedicated Claims Manager",
];

const PLATINUM_GARAGES: GarageItem[] = [
  { name: "Advaith Hyundai", location: "Bilekahalli", imageSrc: "/images/garage1.png" },
  { name: "Trident Hyundai", location: "HSR Layout", imageSrc: "/images/garage2.png" },
  { name: "Pavan Hyundai", location: "Kanakpura", imageSrc: "/images/garage3.png" },
  { name: "Lakshmi Hyundai", location: "Whitefield", imageSrc: "/images/garage4.png" },
];

const PlanVariantSelection = () => {
  const { navigateNext, router } = useFlowNavigation("plan-variant-selection");
  const [selection, setSelection] = useState<PlanVariant>(null);

  const handleBack = () => router.back();
  const handleSummary = () => {};

  const handleContinue = () => {
    navigateNext();
  };

  const handleViewMoreGarages = () => {
    // TODO: open garages list modal or page
  };

  const handleSelectBasic = () => setSelection("basic");
  const handleSelectPlatinum = () => setSelection("platinum");

  return (
    <PageBoxLayout
      header={
        <FlowHeader
          progressPercent={50}
          onBack={handleBack}
          onSummary={handleSummary}
        />
      }
    >
      <ContentContainer>
        <CardsSection>
          <BasicPlanCard
            subtitle="Comprehensive Zero Depreciation"
            title="Basic"
            pricePrefix="starts from "
            price="₹9,000"
            features={BASIC_FEATURES}
            selected={selection === "basic"}
            onClick={handleSelectBasic}
          />
          <SpecialPlanCard
            badge="ACKO Special"
            subtitle="Comprehensive Zero Depreciation"
            title="Platinum"
            pricePrefix="starts from "
            price="₹10,200"
            features={PLATINUM_FEATURES}
            dashcamOfferText="FREE dashcam"
            dashcamImageSrc="/images/dashcam.png"
            garagesTitle="Platinum garages near you"
            garages={PLATINUM_GARAGES}
            viewMoreText="View 24 more garages near you"
            onViewMore={handleViewMoreGarages}
            selected={selection === "platinum"}
            onClick={handleSelectPlatinum}
          />
        </CardsSection>
      </ContentContainer>
      <Footer
        label="Continue"
        onPrimaryClick={handleContinue}
        disabled={selection === null}
      />
    </PageBoxLayout>
  );
};

export default PlanVariantSelection;
