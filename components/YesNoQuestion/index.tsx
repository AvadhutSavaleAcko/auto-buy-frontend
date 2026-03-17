import React, { useState } from "react";
import { useRouter } from "next/router";
import { ContentContainer, OptionsRow, OptionButton } from "./styles";
import PageBoxLayout from "../PageBoxLayout";
import FlowHeader from "../FlowHeader";
import AssistantCard from "../AssistantCard";
import Footer from "../Footer";
import { YES_NO_QUESTION_PAGE_MESSAGES } from "../../config/assistantMessages";

type YesNoChoice = "yes" | "no";

const YesNoQuestion: React.FC = () => {
  const router = useRouter();
  const [choice, setChoice] = useState<YesNoChoice | null>(null);

  const handleContinue = () => {
    router.push("/fresh-car/checkout-details");
  };

  return (
    <PageBoxLayout
      header={
        <FlowHeader
          progressPercent={85}
          onBack={() => router.back()}
        />
      }
    >
      <ContentContainer>
        <AssistantCard
          phase="success"
          messages={YES_NO_QUESTION_PAGE_MESSAGES}
        />

        <OptionsRow role="radiogroup" aria-label="Claim history">
          <OptionButton
            type="button"
            $selected={choice === "yes"}
            onClick={() => setChoice("yes")}
            aria-pressed={choice === "yes"}
            aria-label="Yes, I have made a claim"
          >
            Yes
          </OptionButton>
          <OptionButton
            type="button"
            $selected={choice === "no"}
            onClick={() => setChoice("no")}
            aria-pressed={choice === "no"}
            aria-label="No, I have not made a claim"
          >
            No
          </OptionButton>
        </OptionsRow>
      </ContentContainer>

      <Footer
        label="Continue"
        onPrimaryClick={handleContinue}
        disabled={choice === null}
      />
    </PageBoxLayout>
  );
};

export default YesNoQuestion;
