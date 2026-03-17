import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  ContentContainer,
  MessagesScrollArea,
  OptionsSection,
  OptionCard,
  OptionContent,
  DeductibleAmount,
  DeductibleEffect,
} from "./styles";
import PageBoxLayout from "../PageBoxLayout";
import FlowHeader from "../FlowHeader";
import AssistantCard from "../AssistantCard";
import Footer from "../Footer";
import { DEDUCTIBLE_SELECTION_PAGE_MESSAGES } from "../../config/assistantMessages";

type DeductibleValue = "0" | "5000" | "8000";

interface DeductibleOption {
  value: DeductibleValue;
  label: string;
  effectLabel: string;
}

const OPTIONS: DeductibleOption[] = [
  { value: "0", label: "Deductible ₹0", effectLabel: "Adds ₹1,500 to premium" },
  { value: "5000", label: "Deductible ₹5,000", effectLabel: "No change" },
  {
    value: "8000",
    label: "Deductible ₹8,000",
    effectLabel: "Reduces ₹2,500 from premium",
  },
];

const DeductibleSelection: React.FC = () => {
  const router = useRouter();
  const [selected, setSelected] = useState<DeductibleValue | null>(null);

  const handleContinue = () => {
    router.push("/fresh-car/yes-no-question");
  };

  return (
    <PageBoxLayout
      header={
        <FlowHeader
          progressPercent={75}
          onBack={() => router.back()}
        />
      }
    >
      <ContentContainer>
        <MessagesScrollArea>
          <AssistantCard
            phase="success"
            messages={DEDUCTIBLE_SELECTION_PAGE_MESSAGES}
          />
        </MessagesScrollArea>
        <OptionsSection>
          {OPTIONS.map((opt) => {
            const isSelected = selected === opt.value;
            return (
              <OptionCard
                key={opt.value}
                $selected={isSelected}
                role="radio"
                tabIndex={0}
                aria-checked={isSelected}
                aria-label={`${opt.label} – ${opt.effectLabel}`}
                onClick={() => setSelected(opt.value)}
                onKeyDown={(e: React.KeyboardEvent) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelected(opt.value);
                  }
                }}
              >
                <OptionContent>
                  <DeductibleAmount>{opt.label}</DeductibleAmount>
                  {!isSelected && (
                    <DeductibleEffect>{opt.effectLabel}</DeductibleEffect>
                  )}
                </OptionContent>
              </OptionCard>
            );
          })}
        </OptionsSection>
      </ContentContainer>

      <Footer
        premiumAmount="₹10,200"
        gstText="+18% GST"
        label="Continue"
        onPrimaryClick={handleContinue}
        disabled={selected === null}
      />
    </PageBoxLayout>
  );
};

export default DeductibleSelection;
