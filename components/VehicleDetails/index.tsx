import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Container, ErrorMessage, PageWrapper, BottomSection } from "./styles";
import PageBoxLayout from "../PageBoxLayout";
import FlowHeader from "../FlowHeader";
import AssistantCard from "../AssistantCard";
import type { AssistantCardPhase } from "../AssistantCard";
import { getNextNode } from "../../lib/api/apis";
import VehicleDetailsCard from "../VehicleDetailsCard";
import { parseNextNodeResponse } from "../../lib/parsers/proposalParser";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  setProposalData,
  setProposalError,
  setProposalLoading,
} from "../../store/slices/proposalSlice";

const MESSAGE_DELAY_MS = 2500;

function buildCarDescription(
  makeName: string,
  modelName: string,
  variantName: string,
  registrationYear: number | null
): string {
  const parts = [
    [makeName, modelName].filter(Boolean).join(" "),
    variantName,
    registrationYear?.toString() ?? null,
  ].filter(Boolean);
  return parts.join(" • ");
}

const VehicleDetails = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const proposalEkey = router.query.proposal_ekey as string | undefined;
  const registrationNumber = router.query.registration_number as
    | string
    | undefined;

  const { data: proposalData, loading, error: proposalError } = useAppSelector(
    (state) => state.proposal
  );

  const [assistantPhase, setAssistantPhase] =
    useState<AssistantCardPhase>("initial");

  useEffect(() => {
    if (!proposalEkey?.trim()) return;

    let cancelled = false;

    dispatch(setProposalLoading());

    getNextNode(proposalEkey, { current_node: "vehicle-details", expected_node: "vehicle-details" })
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

  useEffect(() => {
    if (proposalData != null) return;
    const t = setTimeout(() => setAssistantPhase("loading"), MESSAGE_DELAY_MS);
    return () => clearTimeout(t);
  }, [proposalData]);

  const handleBack = () => router.back();
  const handleSummary = () => {};

  const handleYesLooksRight = () => {
    if (!proposalEkey || !registrationNumber) return;
    router.push({
      pathname: "/fresh-car/user-details",
      query: {
        proposal_ekey: proposalEkey,
        registration_number: registrationNumber,
      },
    });
  };

  if (!router.isReady) {
    return (
      <PageWrapper>
        <Container>
          <AssistantCard
            phase="initial"
            registrationNumber={registrationNumber ?? undefined}
          />
        </Container>
      </PageWrapper>
    );
  }

  if (!proposalEkey || !registrationNumber) {
    return (
      <PageBoxLayout
        header={
          <FlowHeader
            progressPercent={10}
            onBack={handleBack}
            onSummary={handleSummary}
          />
        }
      >
        <Container>
          <ErrorMessage>
            Missing proposal or registration number. Please start from the
            registration page.
          </ErrorMessage>
        </Container>
      </PageBoxLayout>
    );
  }

  if (proposalError && !proposalData) {
    return (
      <PageBoxLayout
        header={
          <FlowHeader
            progressPercent={10}
            onBack={handleBack}
            onSummary={handleSummary}
          />
        }
      >
        <Container>
          <ErrorMessage>{proposalError}</ErrorMessage>
        </Container>
      </PageBoxLayout>
    );
  }

  if (loading || !proposalData) {
    return (
      <PageWrapper>
        <Container>
          <AssistantCard
            phase={assistantPhase}
            registrationNumber={registrationNumber}
            messageDelayMs={MESSAGE_DELAY_MS}
          />
        </Container>
      </PageWrapper>
    );
  }

  const { vehicle } = proposalData;

  const carDescription = buildCarDescription(
    vehicle.makeName,
    vehicle.modelName,
    vehicle.variantName,
    vehicle.registrationYear
  );

  return (
    <PageBoxLayout
      header={
        <FlowHeader
          progressPercent={10}
          onBack={handleBack}
          onSummary={handleSummary}
        />
      }
    >
      <Container>
        <AssistantCard
          phase="success"
          onBuyingForSomeoneClick={() => {}}
        />
        <BottomSection>
          <VehicleDetailsCard
            carImageSrc={vehicle.logoUrl ?? "/images/car.png"}
            registrationNumber={
              vehicle.registrationNumber ?? registrationNumber
            }
            carDescription={carDescription}
            details={[
              {
                label: "Fuel type",
                value: vehicle.fuelTypeDisplay ?? vehicle.fuelType ?? "—",
              },
              {
                label: "RTO",
                value: vehicle.rtoCode ?? "—",
              },
              {
                label: "Previous NCB",
                value:
                  vehicle.previousNcb != null
                    ? `${vehicle.previousNcb}%`
                    : "—",
              },
            ]}
            primaryCtaLabel="Yes, looks right"
            onPrimaryCta={handleYesLooksRight}
            secondaryCtaLabel="I want to edit details"
            onSecondaryCta={() => {}}
          />
        </BottomSection>
      </Container>
    </PageBoxLayout>
  );
};

export default VehicleDetails;
