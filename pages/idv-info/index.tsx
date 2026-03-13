import React from "react";
import { useRouter } from "next/router";
import { ProposalContainer, ErrorMessage, PageWrapper } from "./styles";
import PageBoxLayout from "../../components/PageBoxLayout";
import FlowHeader from "../../components/FlowHeader";
import AssistantCard from "../../components/AssistantCard";
import Footer from "../../components/Footer";
import { IDV_INFO_PAGE_MESSAGES } from "../../config/assistantMessages";

const IdvInfoPage = () => {
  const router = useRouter();
  const proposalEkey = router.query.proposal_ekey as string | undefined;
  const registrationNumber = router.query.registration_number as
    | string
    | undefined;

  const handleBack = () => router.back();
  const handleSummary = () => {};

  const handleOkay = () => {
    if (!proposalEkey || !registrationNumber) return;
    router.push({
      pathname: "/plan-selection",
      query: { proposal_ekey: proposalEkey, registration_number: registrationNumber },
    });
  };

  if (!router.isReady) {
    return (
      <PageWrapper>
        <ProposalContainer>
          <AssistantCard phase="success" messages={IDV_INFO_PAGE_MESSAGES} />
        </ProposalContainer>
      </PageWrapper>
    );
  }

  if (!proposalEkey || !registrationNumber) {
    return (
      <PageBoxLayout
        header={
          <FlowHeader
            progressPercent={30}
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
          progressPercent={30}
          onBack={handleBack}
          onSummary={handleSummary}
        />
      }
    >
      <ProposalContainer>
        <AssistantCard
          phase="success"
          messages={IDV_INFO_PAGE_MESSAGES}
        />
      </ProposalContainer>
      <Footer label="Okay" onPrimaryClick={handleOkay} />
    </PageBoxLayout>
  );
};

export default IdvInfoPage;
