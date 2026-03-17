import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  ProposalContainer,
  FixedBottomCardWrapper,
  ErrorMessage,
  PageWrapper,
} from "./styles";
import PageBoxLayout from "../PageBoxLayout";
import FlowHeader from "../FlowHeader";
import AssistantCard from "../AssistantCard";
import UserDetailsCard from "../UserDetailsCard";
import { USER_DETAILS_PAGE_MESSAGES } from "../../config/assistantMessages";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setGlobalData } from "../../store/slices/globalDataSlice";

const UserDetails = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const globalData = useAppSelector((state) => state.globalData);
  const proposalEkey = router.query.proposal_ekey as string | undefined;
  const registrationNumber = router.query.registration_number as
    | string
    | undefined;

  const [phoneNumber, setPhoneNumber] = useState(globalData.phone ?? "");
  const [pinCode, setPinCode] = useState(globalData.pinCode ?? "");

  const handleBack = () => router.back();
  const handleSummary = () => {};

  const isValid = phoneNumber.length === 10 && pinCode.length === 6;

  const handleContinue = () => {
    if (!isValid || !proposalEkey || !registrationNumber) return;
    dispatch(setGlobalData({ phone: phoneNumber, pinCode }));
    router.push({
      pathname: "/fresh-car/idv-info",
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

export default UserDetails;
