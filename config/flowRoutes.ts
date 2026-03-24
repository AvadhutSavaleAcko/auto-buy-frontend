export type FlowPage =
  | "registration-number"
  | "vehicle-details"
  | "yes-no-question"
  | "user-details"
  | "idv-info"
  | "plan-selection"
  | "plan-info"
  | "plan-variant-selection"
  | "platinum-lite-upgrade"
  | "enhance-coverage"
  | "addon-selection"
  | "coverage-selection"
  | "deductible-selection"
  | "idv-selection"
  | "checkout-details";

type RouteResolver =
  | FlowPage
  | ((context?: Record<string, string>) => FlowPage);

const FLOW_ROUTES: Record<FlowPage, RouteResolver> = {
  "registration-number": "vehicle-details",
  "vehicle-details": "yes-no-question",
  "yes-no-question": "user-details",
  "user-details": "idv-info",
  "idv-info": "plan-selection",
  "plan-selection": "plan-info",
  "plan-info": "plan-variant-selection",
  "plan-variant-selection": "platinum-lite-upgrade",
  "platinum-lite-upgrade": "enhance-coverage",
  "enhance-coverage": "addon-selection",
  "addon-selection": (ctx) =>
    ctx?.selection === "build-your-own"
      ? "coverage-selection"
      : "deductible-selection",
  "coverage-selection": "deductible-selection",
  "deductible-selection": "checkout-details",
  "idv-selection": "deductible-selection",
  "checkout-details": "checkout-details",
};

export function getNextRoute(
  currentPage: FlowPage,
  context?: Record<string, string>
): string {
  const resolver = FLOW_ROUTES[currentPage];
  const nextPage =
    typeof resolver === "function" ? resolver(context) : resolver;
  return `/fresh-car/${nextPage}`;
}
