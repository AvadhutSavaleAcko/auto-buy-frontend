import React, { useMemo } from "react";
import { useRouter } from "next/router";
import {
  ContentContainer,
  MessagesScrollArea,
  SelectorSection,
} from "./styles";
import PageBoxLayout from "../PageBoxLayout";
import FlowHeader from "../FlowHeader";
import AssistantCard from "../AssistantCard";
import Footer from "../Footer";
import IDVSelector from "../IDVSelector";
import { getIdvSelectionMessages } from "../../config/assistantMessages";

export interface IdvSelectionConfig {
  resaleMin: number;
  resaleMax: number;
  initialIdv: number;
  recommendedIncrease?: number;
  costForIncrease?: number;
  basePremium: number;
}

const DEFAULT_CONFIG: IdvSelectionConfig = {
  resaleMin: 15,
  resaleMax: 18,
  initialIdv: 17,
  recommendedIncrease: 1,
  costForIncrease: 200,
  basePremium: 12000,
};

const IdvSelection: React.FC<{ config?: Partial<IdvSelectionConfig> }> = (
  props
) => {
  const router = useRouter();
  const configOverride = props.config;
  const config = useMemo(
    () => ({
      ...DEFAULT_CONFIG,
      ...(configOverride && typeof configOverride === "object"
        ? configOverride
        : {}),
    }),
    [
      configOverride?.resaleMin,
      configOverride?.resaleMax,
      configOverride?.initialIdv,
      configOverride?.recommendedIncrease,
      configOverride?.costForIncrease,
      configOverride?.basePremium,
    ]
  );

  const [idv, setIdv] = React.useState(config.initialIdv);

  const messages = useMemo(
    () =>
      getIdvSelectionMessages({
        resaleMin: config.resaleMin,
        resaleMax: config.resaleMax,
        initialIdv: config.initialIdv,
        recommendedIncrease: config.recommendedIncrease,
        costForIncrease: config.costForIncrease,
      }),
    [
      config.resaleMin,
      config.resaleMax,
      config.initialIdv,
      config.recommendedIncrease,
      config.costForIncrease,
    ]
  );

  const premiumAmount = `₹${config.basePremium.toLocaleString("en-IN")}`;

  const handleContinue = () => {
    router.push("/fresh-car/deductible-selection");
  };

  return (
    <PageBoxLayout
      header={
        <FlowHeader
          progressPercent={35}
          onBack={() => router.back()}
        />
      }
    >
      <ContentContainer>
        <MessagesScrollArea>
          <AssistantCard
            phase="success"
            messages={messages}
          />
        </MessagesScrollArea>
        <SelectorSection>
          <IDVSelector
            minIdv={config.resaleMin}
            maxIdv={config.resaleMax}
            value={idv}
            onChange={setIdv}
            resetValue={config.initialIdv}
          />
        </SelectorSection>
      </ContentContainer>

      <Footer
        premiumAmount={premiumAmount}
        gstText="+18% GST"
        label="Continue"
        onPrimaryClick={handleContinue}
      />
    </PageBoxLayout>
  );
};

export default IdvSelection;
