import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { ProposalContainer, ErrorMessage, PageWrapper } from "./styles";
import PageBoxLayout from "../PageBoxLayout";
import FlowHeader from "../FlowHeader";
import AssistantCard from "../AssistantCard";
import Footer from "../Footer";
import { IDV_INFO_PAGE_MESSAGES } from "../../config/assistantMessages";
import { useAppSelector } from "../../store/hooks";
import { getNextNode } from "../../lib/api/apis";

const IdvInfo = () => {
  const router = useRouter();
  const proposalEkey = router.query.proposal_ekey as string | undefined;
  const registrationNumber = router.query.registration_number as
    | string
    | undefined;
  const globalData = useAppSelector((state) => state.globalData);

  const handleBack = () => router.back();
  const handleSummary = () => {};

  useEffect(() => {
    if (!proposalEkey?.trim()) return;

    const data: Record<string, string> = {};
    if (globalData.phone?.trim()) data.phone = globalData.phone.trim();
    if (globalData.pinCode?.trim()) data.pincode = globalData.pinCode.trim();

    getNextNode(proposalEkey, {
      current_node: "idv-info",
      expected_node: "idv-info",
      data,
    }).catch(() => {
      // Handle error if needed (e.g. toast or set error state)
    });
  }, [proposalEkey, globalData.phone, globalData.pinCode]);

  const handleOkay = () => {
    if (!proposalEkey || !registrationNumber) return;
    router.push({
      pathname: "/fresh-car/plan-selection",
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

export default IdvInfo;
