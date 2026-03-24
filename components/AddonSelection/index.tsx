import React, { useState } from "react";
import {
  ContentContainer,
  CardsFixedSection,
  PackSection,
  BuildYourOwnCard,
  BuildYourOwnTitle,
  BuildYourOwnSubtitle,
} from "./styles";
import PageBoxLayout from "../PageBoxLayout";
import FlowHeader from "../FlowHeader";
import AssistantCard from "../AssistantCard";
import TotalProtectionPackCard from "../TotalProtectionPackCard";
import Footer from "../Footer";
import { ADDON_SELECTION_PAGE_MESSAGES } from "../../config/assistantMessages";
import { useFlowNavigation } from "../../hooks/useFlowNavigation";

const TOTAL_PROTECTION_FEATURES = [
  "Passenger Cover",
  "Personal Accident",
  "Roadside Assistance",
  "Engine Protection",
  "Return to Invoice Cover",
];

export type AddonChoice = "pack" | "build-your-own";

const AddonSelection = () => {
  const { navigateNext, router } = useFlowNavigation("addon-selection");
  const [selection, setSelection] = useState<AddonChoice | null>(null);

  const handleBack = () => router.back();
  const handleSummary = () => {};

  const handleContinue = () => {
    navigateNext({ context: { selection: selection ?? "" } });
  };

  const handleLearnMore = () => {
    // TODO: open learn more modal or page
  };

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
        <AssistantCard
          phase="success"
          messages={ADDON_SELECTION_PAGE_MESSAGES}
        />
      </ContentContainer>
      <CardsFixedSection>
        <PackSection>
          <TotalProtectionPackCard
            title="Total Protection Pack"
            price="₹1,800"
            subtext="Includes all essential additional coverages. Minimises out-of-pocket expenses."
            features={TOTAL_PROTECTION_FEATURES}
            recommended
            selected={selection === "pack"}
            onClick={() => setSelection("pack")}
            onLearnMore={handleLearnMore}
          />
        </PackSection>
        <BuildYourOwnCard
          $selected={selection === "build-your-own"}
          role="button"
          tabIndex={0}
          aria-pressed={selection === "build-your-own"}
          aria-label="Build your own – Pick the additional coverages you want"
          onClick={() => setSelection("build-your-own")}
          onKeyDown={(e: React.KeyboardEvent) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setSelection("build-your-own");
            }
          }}
        >
          <BuildYourOwnTitle>Build your own</BuildYourOwnTitle>
          <BuildYourOwnSubtitle>
            Pick the additional coverages you want
          </BuildYourOwnSubtitle>
        </BuildYourOwnCard>
      </CardsFixedSection>
      <Footer
        premiumAmount="₹10,200"
        gstText="+18% GST"
        label="Continue"
        onPrimaryClick={handleContinue}
        disabled={selection === null}
      />
    </PageBoxLayout>
  );
};

export default AddonSelection;
