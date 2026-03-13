import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  ProposalContainer,
  FixedBottomCardWrapper,
  ErrorMessage,
  PageWrapper,
} from "./styles";
import PageBoxLayout from "../../components/PageBoxLayout";
import FlowHeader from "../../components/FlowHeader";
import AssistantCard from "../../components/AssistantCard";
import UserDetailsCard from "../../components/UserDetailsCard";
import { USER_DETAILS_PAGE_MESSAGES } from "../../config/assistantMessages";

const UserDetailsPage = () => {
  const router = useRouter();
  const proposalEkey = router.query.proposal_ekey as string | undefined;
  const registrationNumber = router.query.registration_number as
    | string
    | undefined;

  const [phoneNumber, setPhoneNumber] = useState("");
  const [pinCode, setPinCode] = useState("");

  const handleBack = () => router.back();
  const handleSummary = () => {};

  const isValid =
    phoneNumber.length === 10 && pinCode.length === 6;

  const handleContinue = () => {
    if (!isValid || !proposalEkey || !registrationNumber) return;
    router.push({
      pathname: "/idv-info",
      query: { proposal_ekey: proposalEkey, registration_number: registrationNumber },
    });
  };

  if (!router.isReady) {
    return (
      <PageWrapper>
        <ProposalContainer>
          <AssistantCard phase="success" messages={USER_DETAILS_PAGE_MESSAGES} />
        </ProposalContainer>
      </PageWrapper>
    );
  }

  if (!proposalEkey || !registrationNumber) {
    return (
      <PageBoxLayout
        header={
          <FlowHeader
            progressPercent={20}
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
          progressPercent={20}
          onBack={handleBack}
          onSummary={handleSummary}
        />
      }
    >
      <ProposalContainer>
        <AssistantCard
          phase="success"
          messages={USER_DETAILS_PAGE_MESSAGES}
        />
        <FixedBottomCardWrapper>
          <UserDetailsCard
            phoneNumber={phoneNumber}
            pinCode={pinCode}
            onPhoneChange={setPhoneNumber}
            onPinCodeChange={setPinCode}
            onContinue={handleContinue}
            continueDisabled={!isValid}
          />
        </FixedBottomCardWrapper>
      </ProposalContainer>
    </PageBoxLayout>
  );
};

export default UserDetailsPage;
