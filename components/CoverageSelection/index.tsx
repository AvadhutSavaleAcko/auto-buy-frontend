import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  ContentContainer,
  SectionLabel,
  CoverageList,
  SelectionSummary,
  SummaryText,
  SummaryCount,
} from "./styles";
import PageBoxLayout from "../PageBoxLayout";
import FlowHeader from "../FlowHeader";
import AssistantCard from "../AssistantCard";
import CoverageItemCard from "../CoverageItemCard";
import Footer from "../Footer";
import { COVERAGE_SELECTION_PAGE_MESSAGES } from "../../config/assistantMessages";

interface CoverageItem {
  id: string;
  title: string;
  price: string;
  priceValue: number;
  description: string;
}

const AVAILABLE_COVERAGES: CoverageItem[] = [
  {
    id: "return-to-invoice",
    title: "Return to Invoice Cover",
    price: "₹800",
    priceValue: 800,
    description:
      "Pays full invoice value in case of total loss or theft of your car",
  },
  {
    id: "passenger-cover",
    title: "Passenger Cover",
    price: "₹300",
    priceValue: 300,
    description:
      "Covers medical expenses for passengers in the event of an accident",
  },
  {
    id: "personal-accident",
    title: "Personal Accident",
    price: "₹450",
    priceValue: 450,
    description:
      "Provides compensation to the owner-driver in case of accidental injury",
  },
  {
    id: "roadside-assistance",
    title: "Roadside Assistance",
    price: "₹350",
    priceValue: 350,
    description:
      "Covers towing, flat tyre, fuel delivery, and lockout emergencies",
  },
  {
    id: "engine-protection",
    title: "Engine Protection",
    price: "₹500",
    priceValue: 500,
    description:
      "Covers engine and gearbox damage from water ingression or oil leakage",
  },
  {
    id: "zero-depreciation",
    title: "Zero Depreciation",
    price: "₹650",
    priceValue: 650,
    description:
      "Claim full replacement cost of parts without any depreciation deduction",
  },
  {
    id: "consumables",
    title: "Consumables Cover",
    price: "₹250",
    priceValue: 250,
    description:
      "Covers cost of consumables like nuts, bolts, engine oil, and grease during repair",
  },
];

const BASE_PREMIUM = 10200;

const CoverageSelection: React.FC = () => {
  const router = useRouter();
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const addonTotal = AVAILABLE_COVERAGES.filter((c) =>
    selected.has(c.id)
  ).reduce((sum, c) => sum + c.priceValue, 0);

  const totalPremium = BASE_PREMIUM + addonTotal;
  const premiumLabel = `Premium ₹${totalPremium.toLocaleString("en-IN")} +18% GST`;

  const handleContinue = () => {
    router.push("/fresh-car/deductible-selection");
  };

  return (
    <PageBoxLayout
      header={
        <FlowHeader progressPercent={65} onBack={() => router.back()} />
      }
    >
      <ContentContainer>
        <AssistantCard
          phase="success"
          messages={COVERAGE_SELECTION_PAGE_MESSAGES}
        />

        {selected.size > 0 && (
          <SelectionSummary>
            <SummaryText>
              {selected.size} coverage{selected.size > 1 ? "s" : ""} selected
            </SummaryText>
            <SummaryCount>+₹{addonTotal.toLocaleString("en-IN")}</SummaryCount>
          </SelectionSummary>
        )}

        <div>
          <SectionLabel>Available coverages</SectionLabel>
        </div>

        <CoverageList>
          {AVAILABLE_COVERAGES.map((item) => (
            <CoverageItemCard
              key={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
              selected={selected.has(item.id)}
              onClick={() => toggle(item.id)}
            />
          ))}
        </CoverageList>
      </ContentContainer>

      <Footer
        leftLabel={premiumLabel}
        label="Continue"
        onPrimaryClick={handleContinue}
        disabled={selected.size === 0}
      />
    </PageBoxLayout>
  );
};

export default CoverageSelection;
