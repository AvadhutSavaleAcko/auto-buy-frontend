import React from "react";
import { ProposalContainer } from "./styles";
import PageBoxLayout from "../PageBoxLayout";
import FlowHeader from "../FlowHeader";
import AssistantCard from "../AssistantCard";
import Footer from "../Footer";
import { PLATINUM_LITE_UPGRADE_PAGE_MESSAGES } from "../../config/assistantMessages";
import { useFlowNavigation } from "../../hooks/useFlowNavigation";

const PlatinumLiteUpgrade = () => {
  const { navigateNext, router } = useFlowNavigation("platinum-lite-upgrade");

  const handleBack = () => router.back();
  const handleSummary = () => {};

  const handleSoundsGood = () => {
    navigateNext();
  };

  return (
    <PageBoxLayout
      header={
        <FlowHeader
          progressPercent={55}
          onBack={handleBack}
          onSummary={handleSummary}
        />
      }
    >
      <ProposalContainer>
        <AssistantCard
          phase="success"
          messages={PLATINUM_LITE_UPGRADE_PAGE_MESSAGES}
        />
      </ProposalContainer>
      <Footer label="Sounds good" onPrimaryClick={handleSoundsGood} />
    </PageBoxLayout>
  );
};

export default PlatinumLiteUpgrade;
