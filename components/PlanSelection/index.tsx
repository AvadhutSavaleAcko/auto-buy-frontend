import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  ProposalContainer,
  ErrorMessage,
  PageWrapper,
  TapToChoose,
  PlanCardsSection,
  PlanList,
} from "./styles";
import PageBoxLayout from "../PageBoxLayout";
import FlowHeader from "../FlowHeader";
import AssistantCard from "../AssistantCard";
import PlanCard from "../plan_card";
import Footer from "../Footer";
import CoverageComparisonModal from "../CoverageComparisonModal";
import { PLAN_SELECTION_PAGE_MESSAGES } from "../../config/assistantMessages";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  setProposalData,
  setProposalError,
  setProposalLoading,
} from "../../store/slices/proposalSlice";
import { getNextNode } from "../../lib/api/apis";
import { parseNextNodeResponse } from "../../lib/parsers/proposalParser";


type PlanId = "third-party" | "comprehensive" | null;

const PlanSelection = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const proposalEkey = router.query.proposal_ekey as string | undefined;
  const registrationNumber = router.query.registration_number as
    | string
    | undefined;

  const { data: proposalData, loading, error: proposalError } = useAppSelector(
    (state) => state.proposal
  );

  const [selectedPlan, setSelectedPlan] = useState<PlanId>("comprehensive");
  const [showCompareModal, setShowCompareModal] = useState(false);
  
  useEffect(() => {
    if (!proposalEkey?.trim()) return;

    let cancelled = false;

    dispatch(setProposalLoading());

    getNextNode(proposalEkey, { current_node: "plan-selection", expected_node: "plan-selection" })
      .then((apiResponse) => {
        if (cancelled) return;

        const parsed = parseNextNodeResponse(
          apiResponse as Record<string, unknown>
        );

        if (parsed) {
          dispatch(setProposalData(parsed));
        } else {
          dispatch(setProposalError("Unable to parse proposal data from response."));
        }
      })
      .catch((err) => {
        if (!cancelled) {
          dispatch(
            setProposalError(
              err instanceof Error ? err.message : "Failed to load next step"
            )
          );
        }
      });

    return () => {
      cancelled = true;
    };
  }, [proposalEkey, dispatch]);

  const handleBack = () => router.back();
  const handleSummary = () => {};
  
  const handleContinue = () => {
    const query: Record<string, string> = {};
    if (proposalEkey?.trim()) query.proposal_ekey = proposalEkey.trim();
    if (registrationNumber?.trim())
      query.registration_number = registrationNumber.trim();
    router.push({
      pathname: "/fresh-car/plan-info",
      query: Object.keys(query).length > 0 ? query : undefined,
    });
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

  if (proposalError && !proposalData) {
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
          <ErrorMessage>{proposalError}</ErrorMessage>
        </ProposalContainer>
      </PageBoxLayout>
    );
  }

  if (loading || !proposalData) {
    return (
      <PageWrapper>
        <ProposalContainer>
          <AssistantCard
            phase="success"
            messages={PLAN_SELECTION_PAGE_MESSAGES}
          />
        </ProposalContainer>
      </PageWrapper>
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
        <PlanCardsSection>
          <TapToChoose>Tap to choose</TapToChoose>
          <PlanList>
          <PlanCard
            title="Third-party Plan"
            description="Pays for damage you cause to others. **Does not pay** for damage to your vehicle."
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
            price="₹7,000"
            pricePrefix="starts from"
            selected={selectedPlan === "comprehensive"}
            recommended
            onClick={() =>
              setSelectedPlan((prev) =>
                prev === "comprehensive" ? null : "comprehensive"
              )
            }
          />
          </PlanList>
        </PlanCardsSection>
      </ProposalContainer>
      <Footer
        label="Continue"
        onPrimaryClick={handleContinue}
        disabled={selectedPlan === null}
        secondaryLabel="Compare plans"
        onSecondaryClick={() => setShowCompareModal(true)}
      />
      <CoverageComparisonModal
        show={showCompareModal}
        onClose={() => setShowCompareModal(false)}
      />
    </PageBoxLayout>
  );
};

export default PlanSelection;
