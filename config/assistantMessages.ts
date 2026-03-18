/**
 * Per-page message config for AssistantCard.
 * Each page imports the messages it needs and passes them to AssistantCard.
 * Use **text** in a string for bold; the third vehicle-details message uses **tap here** as a link.
 */

/** Sequential messages shown on the vehicle-details page (car details + "Yes, looks right"). */
export const VEHICLE_DETAILS_PAGE_MESSAGES: string[] = [
  "Here are your car details. Does everything look right?",
  "If you have a company-owned car, you can add your GST number after payment and get a GST invoice.",
  "If you're buying car insurance for someone else, **tap here**",
];

/** Sequential messages shown on the user-details page (phone + pincode step). */
export const USER_DETAILS_PAGE_MESSAGES: string[] = [
  "Thanks for confirming.",
  "I just need a few more details to get the right plans for you",
];

/** Params for IDV selection page messages (non-hardcoded values). */
export interface IdvSelectionMessageParams {
  /** Resale value range min in lakhs (e.g. 15) */
  resaleMin: number;
  /** Resale value range max in lakhs (e.g. 18) */
  resaleMax: number;
  /** Initial/set IDV in lakhs (e.g. 17) */
  initialIdv: number;
  /** Recommended increase in lakhs (e.g. 1). Optional – omits recommendation if not set. */
  recommendedIncrease?: number;
  /** Cost in ₹ for the recommended increase (e.g. 200). Optional. */
  costForIncrease?: number;
}

/** Returns sequential messages for the IDV selection page using provided values. */
export function getIdvSelectionMessages(params: IdvSelectionMessageParams): string[] {
  const {
    resaleMin,
    resaleMax,
    initialIdv,
    recommendedIncrease,
    costForIncrease,
  } = params;

  const resaleRange = `₹${resaleMin}-${resaleMax} lakh`;
  const initialIdvText = `₹${initialIdv} lakh`;

  const messages: string[] = [
    `Your car's current resale value is between ${resaleRange}.`,
    `Earlier, we set your car's insured value (IDV) at ${initialIdvText}.`,
  ];

  if (
    recommendedIncrease != null &&
    recommendedIncrease > 0 &&
    costForIncrease != null
  ) {
    messages.push(
      `We recommend you increase your IDV by ₹${recommendedIncrease} lakh for just ₹${costForIncrease.toLocaleString("en-IN")}. This will cover the current value of your car.`
    );
  } else if (recommendedIncrease != null && recommendedIncrease > 0) {
    messages.push(
      `We recommend you increase your IDV by ₹${recommendedIncrease} lakh. This will cover the current value of your car.`
    );
  }

  return messages;
}

/** Sequential messages shown on the idv-info page (IDV explanation). */
export const IDV_INFO_PAGE_MESSAGES: string[] = [
  "Before I show you the plans, let's look at your car's insured value (IDV). IDV is your car's current value. It's the maximum amount we will pay you if your car is stolen or damaged beyond repair.",
  "Last year your IDV was ₹18 lakh. Based on your car's age and depreciation, we've set it to ₹17 lakh this year.",
  "Your plan prices will be calculated based on this value. You can increase or decrease the IDV before payment.",
];

/** Sequential messages shown on the plan-selection page (Plan Selection). */
export const PLAN_SELECTION_PAGE_MESSAGES: string[] = [
  "Here are the plans we have for you",
  "I'd personally recommend the **Comprehensive Plan**. It is great value for money and offers Zero Depreciation option as well.",
  "Some ACKO Special* Comprehensive Plans also come with a **FREE dashcam**!",
];

/** Sequential messages shown on the addon-selection page (Add-on coverages). */
export const ADDON_SELECTION_PAGE_MESSAGES: string[] = [
  "Based on your answers, I have created a pack of additional coverages that are relevant for you.",
  "Based on my calculations these can save you up to ₹25,000 during claims.",
];

/** Sequential messages shown on the coverage-selection page (Build your own). */
export const COVERAGE_SELECTION_PAGE_MESSAGES: string[] = [
  "Boost your plan with additional coverages"
];

/** Sequential messages shown on the deductible-selection page. */
export const DEDUCTIBLE_SELECTION_PAGE_MESSAGES: string[] = [
  "From what I can see, you have a pretty good driving record.",
  "You could choose a deductible to lower your premium. You’d only pay that amount if you ever make a claim.",
  "A deductible of ₹5,000 is a safe choice. It will bring down your premium and won’t pinch, even if you claim."
];

/** Sequential messages shown on the yes-no-question page (claim history). */
export const YES_NO_QUESTION_PAGE_MESSAGES: string[] = [
  "One last thing — have you made any claims on this car in the last year?",
];

/** Config for the enhance-coverage page (assistant intro + Yes/No questions). */
export interface EnhanceCoverageQuestion {
  id: string;
  question: string;
}

export interface EnhanceCoverageConfig {
  /** Intro messages shown by the assistant before the questions. */
  introMessages: string[];
  /** Yes/No questions to show. */
  questions: EnhanceCoverageQuestion[];
}

export const ENHANCE_COVERAGE_CONFIG: EnhanceCoverageConfig = {
  introMessages: [
    "Let's enhance your plan with important coverages.",
    "Just answer a few questions so that I can get the relevant additional coverages for you.",
  ],
  questions: [
    { id: "has-driver", question: "Do you have a driver?" },
    { id: "long-road-trips", question: "Do you go on long road trips often?" },
    { id: "flood-prone-area", question: "Do you live in a flood-prone area?" },
  ],
};

/** Sequential messages shown on the checkout-details page (final review). */
export const PROPOSAL_SUMMARY_PAGE_MESSAGES: string[] = [
  "Here's a summary of your car insurance proposal.",
  "Please review your details before we proceed to payment.",
];

/** Sequential messages shown on the plan-info page (Basic vs Platinum intro before plan variant selection). */
export const PLAN_INFO_PAGE_MESSAGES: string[] = [
  "Got it! This plan has two options: Basic and **Platinum**. You can choose one in the next step.",
  "I suggest choosing Platinum. It gives you an end-to-end managed claims experience – including doorstep pickup and drop, repairs at top-rated garages, a dedicated claims manager, and a 1-year warranty on repairs.",
  "It also **includes a FREE dashcam!**",
];

/** Sequential messages shown on the platinum-lite-upgrade page (FREE upgrade to Platinum Lite). */
export const PLATINUM_LITE_UPGRADE_PAGE_MESSAGES: string[] = [
  "Good news! You've been upgraded to Platinum Lite for FREE!",
  "Platinum Lite gives you a more convenient claims experience. **You will get:** All benefits of Standard, repairs at Platinum-certified garages, doorstep pickup and drop, 1-year warranty on all repairs, and a dedicated claims manager.",
  "Once your policy is active, we'll share the details of your Claims Manager.",
  "If you're ever in an accident, just call them. They'll manage everything.",
];
