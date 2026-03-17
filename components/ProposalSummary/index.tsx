import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  ContentContainer,
  Divider,
  DetailRow,
  DetailLabel,
  DetailValue,
  NcbBadge,
  NcbArrowUp,
  CoverageRow,
  CoverageCheckWrap,
  CoverageLabel,
  TotalRow,
  TotalLabel,
  TotalValue,
  SummaryBlock,
  SummaryPrimary,
  SummarySecondary,
  SummarySingle,
  PageTitle,
  CouponInputRow,
  CouponInput,
  CouponApplyBtn,
  CouponItem,
  CouponItemIcon,
  CouponItemContent,
  CouponItemTitle,
  CouponItemSub,
  PolicyDateText,
} from "./styles";
import ExpandableCard from "../ExpandableCard";
import Icon from "../Icon";
import PageBoxLayout from "../PageBoxLayout";
import FlowHeader from "../FlowHeader";
import Footer from "../Footer";

const CheckCircle: React.FC = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <circle cx="8" cy="8" r="7" fill="#0fa357" />
    <path
      d="M5 8.5l2 2 4-4"
      stroke="#fff"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const COVERAGES = [
  "Third-party Liability",
  "Own Damage (OD)",
  "Total Protection Pack",
  "Passenger Cover",
  "Personal Accident",
  "Roadside Assistance",
  "Engine Protection",
  "Return to Invoice Cover",
];

const PREMIUM_ROWS: { label: string; value: string }[] = [
  { label: "Net premium", value: "₹12,000" },
  { label: "18% GST", value: "₹2,160" },
];

const COUPONS = [
  { title: "₹500 off", sub: "Available for the selected plan" },
  { title: "WELCOME100 | ₹500 off", sub: "Available for the selected plan" },
];

const TOTAL_AMOUNT = "₹14,160";

const ProposalSummary: React.FC = () => {
  const router = useRouter();
  const [couponCode, setCouponCode] = useState("");

  const handlePay = () => {
    // Payment / confirmation navigation to be wired in
  };

  const handleApplyCoupon = () => {
    // Apply coupon logic to be wired in
  };

  return (
    <PageBoxLayout
      header={<FlowHeader progressPercent={95} onBack={() => router.back()} />}
    >
      <ContentContainer>
        <PageTitle>All set! You can review your policy details and premium</PageTitle>

        <ExpandableCard
          icon={<Icon name="car" size={24} />}
          title="Car and personal details"
          defaultExpanded={false}
          summary={
            <SummaryBlock>
              <SummaryPrimary>MH 04 EQ 4392</SummaryPrimary>
              <SummarySecondary>
                Maruti Swift Dzire • Petrol • 2010
              </SummarySecondary>
            </SummaryBlock>
          }
          editLabel="Edit"
          onEdit={() => router.push("/fresh-car/vehicle-details")}
          showEditOnlyWhenExpanded
        >
          <DetailRow>
            <DetailLabel>Registration No.</DetailLabel>
            <DetailValue>MH 04 EQ 4392</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Vehicle</DetailLabel>
            <DetailValue>Maruti Swift Dzire • Petrol • 2010</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Owner</DetailLabel>
            <DetailValue>Kiran Kumar</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Mobile • Pincode</DetailLabel>
            <DetailValue>8935714175 • 560061</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>No Claim Bonus (NCB)</DetailLabel>
            <DetailValue>
              <NcbBadge>
                <NcbArrowUp>↑</NcbArrowUp>
                25%
              </NcbBadge>
            </DetailValue>
          </DetailRow>
        </ExpandableCard>

        <ExpandableCard
          icon={<Icon name="comprehensive" size={24} />}
          title="Coverage details"
          defaultExpanded={false}
          summary={
            <SummarySingle>
              Zero depreciation Platinum plan (₹8.5 lakh IDV) with 3 additional
              covers
            </SummarySingle>
          }
        >
          {COVERAGES.map((label) => (
            <CoverageRow key={label}>
              <CoverageCheckWrap>
                <CheckCircle />
              </CoverageCheckWrap>
              <CoverageLabel>{label}</CoverageLabel>
            </CoverageRow>
          ))}
        </ExpandableCard>

        <ExpandableCard
          icon={<Icon name="calendar" size={24} />}
          title="Policy start date"
          expandable={false}
          defaultExpanded={true}
        >
          <PolicyDateText>
            Starts on <strong>24 May 2024</strong> at 12 AM
          </PolicyDateText>
        </ExpandableCard>

        <ExpandableCard
          icon={<Icon name="discount-coupon" size={24} />}
          title="Apply coupon"
          badge="2 coupons"
          defaultExpanded={true}
        >
          <CouponInputRow>
            <CouponInput
              type="text"
              placeholder="Enter coupon code"
              value={couponCode}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setCouponCode(e.target.value)}
              aria-label="Enter coupon code"
            />
            <CouponApplyBtn type="button" onClick={handleApplyCoupon}>
              Apply
            </CouponApplyBtn>
          </CouponInputRow>
          <Divider />
          {COUPONS.map(({ title, sub }) => (
            <CouponItem key={title}>
              <CouponItemIcon>
                <Icon name="discount-offer-save" size={24} />
              </CouponItemIcon>
              <CouponItemContent>
                <CouponItemTitle>{title}</CouponItemTitle>
                <CouponItemSub>{sub}</CouponItemSub>
              </CouponItemContent>
              <CouponApplyBtn type="button" onClick={handleApplyCoupon}>
                Apply
              </CouponApplyBtn>
            </CouponItem>
          ))}
        </ExpandableCard>

        <ExpandableCard
          icon={<Icon name="money" size={24} />}
          title="Premium break-up"
          defaultExpanded={false}
          summary={
            <SummaryBlock>
              <DetailRow>
                <DetailLabel>Net premium</DetailLabel>
                <DetailValue>₹12,000</DetailValue>
              </DetailRow>
              <DetailRow>
                <DetailLabel>18% GST</DetailLabel>
                <DetailValue>₹2,160</DetailValue>
              </DetailRow>
              <DetailRow>
                <TotalLabel>Total</TotalLabel>
                <TotalValue>{TOTAL_AMOUNT}</TotalValue>
              </DetailRow>
            </SummaryBlock>
          }
        >
          {PREMIUM_ROWS.map(({ label, value }) => (
            <DetailRow key={label}>
              <DetailLabel>{label}</DetailLabel>
              <DetailValue>{value}</DetailValue>
            </DetailRow>
          ))}
          <Divider />
          <TotalRow>
            <TotalLabel>Total</TotalLabel>
            <TotalValue>{TOTAL_AMOUNT}</TotalValue>
          </TotalRow>
        </ExpandableCard>
      </ContentContainer>

      <Footer label={`Pay ${TOTAL_AMOUNT}`} onPrimaryClick={handlePay} />
    </PageBoxLayout>
  );
};

export default ProposalSummary;
