import React from "react";
import { useRouter } from "next/router";
import { ProposalContainer } from "./styles";
import PageBoxLayout from "../PageBoxLayout";
import FlowHeader from "../FlowHeader";
import AssistantCard from "../AssistantCard";
import Footer from "../Footer";
import { PLATINUM_LITE_UPGRADE_PAGE_MESSAGES } from "../../config/assistantMessages";

const PlatinumLiteUpgrade = () => {
  const router = useRouter();
  const proposalEkey = router.query.proposal_ekey as string | undefined;
  const registrationNumber = router.query.registration_number as
    | string
    | undefined;

  const handleBack = () => router.back();
  const handleSummary = () => {};

  const handleSoundsGood = () => {
    const query: Record<string, string> = {};
    if (proposalEkey?.trim()) query.proposal_ekey = proposalEkey.trim();
    if (registrationNumber?.trim())
      query.registration_number = registrationNumber.trim();
    router.push({
      pathname: "/fresh-car/enhance-coverage",
      query: Object.keys(query).length > 0 ? query : undefined,
    });
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
