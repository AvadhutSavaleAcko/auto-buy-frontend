import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  PageWrapper,
  RegistrationContainer,
  Header,
  Title,
  RegistrationForm,
  FieldGroup,
  Label,
  RegistrationInput,
  RegistrationButton,
  ErrorMessage,
} from "./styles";
import { createProposal } from "../../lib/api/apis";

const RegistrationNumberPage = () => {
  const router = useRouter();
  const [regNo, setRegNo] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = regNo.trim();
    if (!trimmed) return;

    setError(null);
    setLoading(true);
    try {
      const proposal = await createProposal(trimmed);
      const params = new URLSearchParams({
        proposal_ekey: proposal.ekey,
        registration_number: trimmed,
      });
      router.push(`/vehicle-details?${params.toString()}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setLoading(false);
    }
  };

  const isValid = regNo.trim().length > 0;

  return (
    <PageWrapper>
      <RegistrationContainer>
        <Header>
          <Title>Enter your car details</Title>
        </Header>

        <RegistrationForm onSubmit={handleSubmit}>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <FieldGroup>
            <Label htmlFor="reg-no">Registration number</Label>
            <RegistrationInput
              id="reg-no"
              type="text"
              value={regNo}
              onChange={(e) => setRegNo(e.target.value)}
              placeholder="e.g. MH12AB1234"
              aria-label="Car registration number"
              autoComplete="off"
              disabled={loading}
            />
          </FieldGroup>

          <RegistrationButton type="submit" disabled={!isValid || loading}>
            {loading ? "Loading…" : "Continue"}
          </RegistrationButton>
        </RegistrationForm>
      </RegistrationContainer>
    </PageWrapper>
  );
};

export default RegistrationNumberPage;
