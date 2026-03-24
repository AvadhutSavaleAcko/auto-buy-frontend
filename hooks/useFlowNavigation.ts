import { useRouter } from "next/router";
import { getNextRoute, type FlowPage } from "../config/flowRoutes";

interface NavigateNextOptions {
  context?: Record<string, string>;
  query?: Record<string, string>;
}

export function useFlowNavigation(currentPage: FlowPage) {
  const router = useRouter();
  const proposalEkey = router.query.proposal_ekey as string | undefined;
  const registrationNumber = router.query.registration_number as
    | string
    | undefined;

  const navigateNext = (options?: NavigateNextOptions) => {
    const nextPath = getNextRoute(currentPage, options?.context);

    const query: Record<string, string> = {};
    if (proposalEkey?.trim()) query.proposal_ekey = proposalEkey.trim();
    if (registrationNumber?.trim())
      query.registration_number = registrationNumber.trim();
    if (options?.query) Object.assign(query, options.query);

    router.push({
      pathname: nextPath,
      query: Object.keys(query).length > 0 ? query : undefined,
    });
  };

  return { navigateNext, router, proposalEkey, registrationNumber };
}
