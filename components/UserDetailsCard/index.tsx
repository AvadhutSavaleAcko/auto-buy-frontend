import React from "react";
import {
  Card,
  FieldGroup,
  Label,
  InputWrap,
  Input,
  Helper,
  Actions,
  PrimaryButton,
} from "./styles";

export interface UserDetailsCardProps {
  /** Controlled phone value (10-digit) */
  phoneNumber: string;
  /** Controlled pincode value (6-digit) */
  pinCode: string;
  /** Phone change handler */
  onPhoneChange: (value: string) => void;
  /** Pincode change handler */
  onPinCodeChange: (value: string) => void;
  /** Continue / submit handler */
  onContinue: () => void;
  /** Disable continue button (e.g. validation or loading) */
  continueDisabled?: boolean;
  /** Optional className */
  className?: string;
  /** Optional aria-label for the card */
  ariaLabel?: string;
}

const UserDetailsCard: React.FC<UserDetailsCardProps> = ({
  phoneNumber,
  pinCode,
  onPhoneChange,
  onPinCodeChange,
  onContinue,
  continueDisabled = false,
  className,
  ariaLabel = "Phone and pin code",
}) => {
  return (
    <Card
      className={className}
      role="form"
      aria-label={ariaLabel}
    >
      <FieldGroup>
        <Label htmlFor="phone">Phone number</Label>
        <InputWrap>
          <Input
            id="phone"
            type="tel"
            inputMode="numeric"
            placeholder="10-digit phone number"
            value={phoneNumber}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onPhoneChange(e.target.value.replace(/\D/g, "").slice(0, 10))
            }
            maxLength={10}
            aria-describedby="phone-helper"
          />
        </InputWrap>
        <Helper id="phone-helper">
          {"We'll only use it to share policy updates."}
        </Helper>
      </FieldGroup>

      <FieldGroup>
        <Label htmlFor="pincode">Pin code</Label>
        <InputWrap>
          <Input
            id="pincode"
            type="text"
            inputMode="numeric"
            placeholder="6-digit pin code"
            value={pinCode}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onPinCodeChange(e.target.value.replace(/\D/g, "").slice(0, 6))
            }
            maxLength={6}
            aria-describedby="pincode-helper"
          />
        </InputWrap>
        <Helper id="pincode-helper">
          This will help us find the best garages near you.
        </Helper>
      </FieldGroup>

      <Actions>
        <PrimaryButton
          type="button"
          onClick={onContinue}
          disabled={continueDisabled}
        >
          Continue
        </PrimaryButton>
      </Actions>
    </Card>
  );
};

export default UserDetailsCard;
