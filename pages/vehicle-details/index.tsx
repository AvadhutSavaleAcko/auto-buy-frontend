import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ProposalContainer, ErrorMessage, PageWrapper } from "./styles";
import PageBoxLayout from "../../components/PageBoxLayout";
import FlowHeader from "../../components/FlowHeader";
import AssistantCard from "../../components/AssistantCard";
import type { AssistantCardPhase } from "../../components/AssistantCard";
import { getNextNode, type NextNodeResponse } from "../../lib/api/apis";
import VehicleDetailsCard from "../../components/VehicleDetailsCard";

const MESSAGE_DELAY_MS = 2500;

const ProposalPage = () => {
  const router = useRouter();
  const proposalEkey = router.query.proposal_ekey as string | undefined;
  const registrationNumber = router.query.registration_number as
    | string
    | undefined;

  const [nextNodeData, setNextNodeData] = useState<NextNodeResponse | null>(null);
  const [nextNodeError, setNextNodeError] = useState<string | null>(null);
  const [assistantPhase, setAssistantPhase] = useState<AssistantCardPhase>("initial");

  useEffect(() => {
    if (!proposalEkey?.trim()) return;

    let cancelled = false;

    getNextNode(proposalEkey)
      .then((data) => {
        if (!cancelled) {
          setNextNodeData(data);
          setNextNodeError(null);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setNextNodeError(
            err instanceof Error ? err.message : "Failed to load next step",
          );
        }
      });

    return () => {
      cancelled = true;
    };
  }, [proposalEkey]);

  useEffect(() => {
    if (nextNodeData != null) return;
    const t = setTimeout(() => setAssistantPhase("loading"), MESSAGE_DELAY_MS);
    return () => clearTimeout(t);
  }, [nextNodeData]);

  const handleBack = () => router.back();
  const handleSummary = () => {};
  const handleBuyingForSomeone = () => {}; // TODO: navigate or open flow

  const handleYesLooksRight = () => {
    if (!proposalEkey || !registrationNumber) return;
    router.push({
      pathname: "/user-details",
      query: { proposal_ekey: proposalEkey, registration_number: registrationNumber },
    });
  };

  if (!router.isReady) {
    return (
      <PageWrapper>
        <ProposalContainer>
          <AssistantCard
            phase="initial"
            registrationNumber={registrationNumber ?? undefined}
          />
        </ProposalContainer>
      </PageWrapper>
    );
  }

  if (!proposalEkey || !registrationNumber) {
    return (
      <PageBoxLayout
        header={
          <FlowHeader progressPercent={10} onBack={handleBack} onSummary={handleSummary} />
        }
      >
        <ProposalContainer>
          <ErrorMessage>
            Missing proposal or registration number. Please start from the
            registration page.
          </ErrorMessage>
        </ProposalContainer>
      </PageBoxLayout>
    );
  }

  const hasNextNodeData = nextNodeData != null;

  if (nextNodeError && !hasNextNodeData) {
    return (
      <PageBoxLayout
        header={
          <FlowHeader progressPercent={10} onBack={handleBack} onSummary={handleSummary} />
        }
      >
        <ProposalContainer>
          <ErrorMessage>{nextNodeError}</ErrorMessage>
        </ProposalContainer>
      </PageBoxLayout>
    );
  }

  if (!hasNextNodeData) {
    return (
      <PageWrapper>
        <ProposalContainer>
          <AssistantCard
            phase={assistantPhase}
            registrationNumber={registrationNumber}
            messageDelayMs={MESSAGE_DELAY_MS}
          />
        </ProposalContainer>
      </PageWrapper>
    );
  }

  return (
    <PageBoxLayout
      header={
        <FlowHeader progressPercent={10} onBack={handleBack} onSummary={handleSummary} />
      }
    >
      <ProposalContainer>
        <AssistantCard
          phase="success"
          onBuyingForSomeoneClick={handleBuyingForSomeone}
        />
        <VehicleDetailsCard
          carImageSrc="/path/to/car.png"
          registrationNumber={registrationNumber}
          carDescription="Hyundai Creta • SX • 2021"
          details={[
            { label: "Estimated car value", value: "₹15–₹18 lakh" },
            { label: "Policy expiry date", value: "22 Oct 2026" },
            { label: "NCB", value: "20%" },
          ]}
          primaryCtaLabel="Yes, looks right"
          onPrimaryCta={handleYesLooksRight}
          secondaryCtaLabel="I want to edit details"
          onSecondaryCta={() => {}}
        />
      </ProposalContainer>
    </PageBoxLayout>
  );
};

export default ProposalPage;
