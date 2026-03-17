import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  ContentContainer,
  OptionsSection,
  SectionLabel,
  OptionCard,
  OptionLeft,
  DeductibleAmount,
  DeductibleDescription,
  DeductibleEffect,
  RadioDot,
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
  description: string;
  effectLabel: string;
  positive?: boolean;
  negative?: boolean;
}

const OPTIONS: DeductibleOption[] = [
  {
    value: "0",
    label: "Deductible ₹0",
    description: "You pay nothing extra during a claim",
    effectLabel: "+₹1,500 to premium",
    positive: true,
  },
  {
    value: "5000",
    label: "Deductible ₹5,000",
    description: "You pay ₹5,000 from pocket during a claim",
    effectLabel: "No change",
  },
  {
    value: "8000",
    label: "Deductible ₹8,000",
    description: "You pay ₹8,000 from pocket during a claim",
    effectLabel: "−₹2,500 from premium",
    negative: true,
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
        <AssistantCard
          phase="success"
          messages={DEDUCTIBLE_SELECTION_PAGE_MESSAGES}
        />

        <div>
          <SectionLabel>Select voluntary deductible</SectionLabel>
          <OptionsSection>
            {OPTIONS.map((opt) => (
              <OptionCard
                key={opt.value}
                $selected={selected === opt.value}
                role="radio"
                tabIndex={0}
                aria-checked={selected === opt.value}
                aria-label={`${opt.label} – ${opt.effectLabel}`}
                onClick={() => setSelected(opt.value)}
                onKeyDown={(e: React.KeyboardEvent) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelected(opt.value);
                  }
                }}
              >
                <OptionLeft>
                  <DeductibleAmount>{opt.label}</DeductibleAmount>
                  <DeductibleDescription>{opt.description}</DeductibleDescription>
                </OptionLeft>
                <DeductibleEffect
                  $positive={opt.positive}
                  $negative={opt.negative}
                >
                  {opt.effectLabel}
                </DeductibleEffect>
                <RadioDot $selected={selected === opt.value} />
              </OptionCard>
            ))}
          </OptionsSection>
        </div>
      </ContentContainer>

      <Footer
        leftLabel="Premium ₹10,200 +18% GST"
        label="Continue"
        onPrimaryClick={handleContinue}
        disabled={selected === null}
      />
    </PageBoxLayout>
  );
};

export default DeductibleSelection;
