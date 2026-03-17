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
  "Choose the coverages that matter most to you.",
  "These are calculated based on your car's age and usage. You can add or remove them anytime.",
];

/** Sequential messages shown on the deductible-selection page. */
export const DEDUCTIBLE_SELECTION_PAGE_MESSAGES: string[] = [
  "A voluntary deductible is the amount you agree to pay from your pocket during a claim.",
  "A higher deductible lowers your premium, but you'll pay more if you ever make a claim.",
];

/** Sequential messages shown on the yes-no-question page (claim history). */
export const YES_NO_QUESTION_PAGE_MESSAGES: string[] = [
  "One last thing — have you made any claims on this car in the last year?",
];

/** Sequential messages shown on the checkout-details page (final review). */
export const PROPOSAL_SUMMARY_PAGE_MESSAGES: string[] = [
  "Here's a summary of your car insurance proposal.",
  "Please review your details before we proceed to payment.",
];
