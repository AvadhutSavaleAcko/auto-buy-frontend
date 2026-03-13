import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  ProposalContainer,
  ErrorMessage,
  PageWrapper,
  TapToChoose,
  PlanList,
} from "./styles";
import PageBoxLayout from "../../components/PageBoxLayout";
import FlowHeader from "../../components/FlowHeader";
import AssistantCard from "../../components/AssistantCard";
import PlanCard from "../../components/plan_card";
import Footer from "../../components/Footer";
import { PLAN_SELECTION_PAGE_MESSAGES } from "../../config/assistantMessages";

type PlanId = "third-party" | "comprehensive" | null;

const PlanSelectionPage = () => {
  const router = useRouter();
  const proposalEkey = router.query.proposal_ekey as string | undefined;
  const registrationNumber = router.query.registration_number as
    | string
    | undefined;

  const [selectedPlan, setSelectedPlan] = useState<PlanId>(null);

  const handleBack = () => router.back();
  const handleSummary = () => {};

  const handleContinue = () => {
    // TODO: navigate to next step when plan selection flow is defined
    router.back();
  };

  if (!router.isReady) {
    return (
      <PageWrapper>
        <ProposalContainer>
          <AssistantCard phase="success" messages={PLAN_SELECTION_PAGE_MESSAGES} />
        </ProposalContainer>
      </PageWrapper>
    );
  }

  if (!proposalEkey || !registrationNumber) {
    return (
      <PageBoxLayout
        header={
          <FlowHeader
            progressPercent={40}
            onBack={handleBack}
            onSummary={handleSummary}
          />
        }
      >
        <ProposalContainer>
          <ErrorMessage>
            Missing proposal or registration number. Please start from the
            previous step.
          </ErrorMessage>
        </ProposalContainer>
      </PageBoxLayout>
    );
  }

  return (
    <PageBoxLayout
      header={
        <FlowHeader
          progressPercent={40}
          onBack={handleBack}
          onSummary={handleSummary}
        />
      }
    >
      <ProposalContainer>
        <AssistantCard
          phase="success"
          messages={PLAN_SELECTION_PAGE_MESSAGES}
        />
        <TapToChoose>Tap to choose</TapToChoose>
        <PlanList>
          <PlanCard
            title="Third-party Plan"
            description="Pays for damage you cause to others. **Does not pay for damage to your vehicle.**"
            price="₹3,500"
            selected={selectedPlan === "third-party"}
            onClick={() =>
              setSelectedPlan((prev) =>
                prev === "third-party" ? null : "third-party"
              )
            }
          />
          <PlanCard
            title="Comprehensive Plans"
            description="Pays for accidental damage to your vehicle and for damage you cause to others."
            price="starts from ₹7,000"
            selected={selectedPlan === "comprehensive"}
            onClick={() =>
              setSelectedPlan((prev) =>
                prev === "comprehensive" ? null : "comprehensive"
              )
            }
          />
        </PlanList>
      </ProposalContainer>
      <Footer
        label="Continue"
        onPrimaryClick={handleContinue}
        disabled={selectedPlan === null}
      />
    </PageBoxLayout>
  );
};

export default PlanSelectionPage;
