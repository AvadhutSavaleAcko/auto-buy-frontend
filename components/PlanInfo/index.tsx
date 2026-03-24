import React from "react";
import { ProposalContainer } from "./styles";
import PageBoxLayout from "../PageBoxLayout";
import FlowHeader from "../FlowHeader";
import AssistantCard from "../AssistantCard";
import Footer from "../Footer";
import { PLAN_INFO_PAGE_MESSAGES } from "../../config/assistantMessages";
import { useFlowNavigation } from "../../hooks/useFlowNavigation";

const PlanInfo = () => {
  const { navigateNext, router } = useFlowNavigation("plan-info");

  const handleBack = () => router.back();
  const handleSummary = () => {};

  const handleContinue = () => {
    navigateNext();
  };

  return (
    <PageBoxLayout
      header={
        <FlowHeader
          progressPercent={45}
          onBack={handleBack}
          onSummary={handleSummary}
        />
      }
    >
      <ProposalContainer>
        <AssistantCard
          phase="success"
          messages={PLAN_INFO_PAGE_MESSAGES}
        />
      </ProposalContainer>
      <Footer label="Continue" onPrimaryClick={handleContinue} />
    </PageBoxLayout>
  );
};

export default PlanInfo;
