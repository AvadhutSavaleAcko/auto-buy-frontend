import mockProposalResponse from "./mockresponse.json";

const USE_MOCK_PROPOSAL = false;

const DEFAULT_HEADERS: Record<string, string> = {
  accept: "application/json, text/plain, */*",
  "content-type": "application/json",
  "x-app-name": "frontend-seo",
  "x-platform": "mweb",
  "x-landing-path": "/",
  "x-landing-url": "https://www.ackodev.com/gi/car",
};

export interface CreateProposalPayload {
  registration_number: string;
  mobile_no?: string;
  origin?: string;
  product?: string;
  is_new?: boolean;
}

export interface ProposalResponse {
  ekey: string;
  [key: string]: unknown;
}

export async function createProposal(
  registrationNumber: string,
  payload?: Partial<CreateProposalPayload>
): Promise<ProposalResponse> {
  if (USE_MOCK_PROPOSAL) {
    const data = mockProposalResponse as ProposalResponse;
    if (!data.ekey) throw new Error("Mock proposal response missing ekey");
    return Promise.resolve(data);
  }

  const body: CreateProposalPayload = {
    registration_number: registrationNumber.trim(),
    mobile_no: "",
    origin: "acko",
    product: "car",
    is_new: false,
    ...payload,
  };
  const url = `${process.env.NEXT_PUBLIC_MOTORORCHESTRATOR_API_SERVICE}/motororchestrator/api/v2/proposals`;
  const res = await fetch(url, {
    method: "POST",
    headers: DEFAULT_HEADERS,
    body: JSON.stringify(body),  
    credentials: "include",
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Proposals API failed: ${res.status} ${text}`);
  }
  const data = (await res.json()) as ProposalResponse;
  if (!data.ekey) {
    throw new Error("Proposals API response missing ekey");
  }
  return data;
}

export interface NextNodePayload {
  proposal_ekey: string;
  current_node?: string;
  journey?: string;
  data?: Record<string, unknown>;
}

export interface NextNodeResponse {
  [key: string]: unknown;
}

export async function getNextNode(
  proposalEkey: string,
  options?: Partial<NextNodePayload>
): Promise<NextNodeResponse> {
  const body = {
    data: {
      is_new: false,
      origin: "acko",
      product: "car",
      proposal_ekey: proposalEkey,
      returnHydratedData: true,
      ...options?.data,
    },
    journey: "fresh_car_2",
    current_node: "vehicle-details",
    expected_node: "vehicle-details",
    ...options,
  };

  const res = await fetch(`${process.env.NEXT_PUBLIC_SDUI_API_SERVICE}/sdui/api/v1/next-node`, {
    method: "POST",
    headers: {
      ...DEFAULT_HEADERS,
      accept: "application/json",
      "x-journey-version": "v3",
    },
    body: JSON.stringify(body),
    credentials: "include",
  });

  // if (!res.ok) {
  //   const text = await res.text();
  //   throw new Error(`Next-node API failed: ${res.status} ${text}`);
  // }

  return res.json() as Promise<NextNodeResponse>;
}
