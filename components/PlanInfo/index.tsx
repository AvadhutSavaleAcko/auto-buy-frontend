import React from "react";
import { useRouter } from "next/router";
import { ProposalContainer } from "./styles";
import PageBoxLayout from "../PageBoxLayout";
import FlowHeader from "../FlowHeader";
import AssistantCard from "../AssistantCard";
import Footer from "../Footer";
import { PLAN_INFO_PAGE_MESSAGES } from "../../config/assistantMessages";

const PlanInfo = () => {
  const router = useRouter();
  const proposalEkey = router.query.proposal_ekey as string | undefined;
  const registrationNumber = router.query.registration_number as
    | string
    | undefined;

  const handleBack = () => router.back();
  const handleSummary = () => {};

  const handleContinue = () => {
    const query: Record<string, string> = {};
    if (proposalEkey?.trim()) query.proposal_ekey = proposalEkey.trim();
    if (registrationNumber?.trim())
      query.registration_number = registrationNumber.trim();
    router.push({
      pathname: "/fresh-car/plan-variant-selection",
      query: Object.keys(query).length > 0 ? query : undefined,
    });
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
