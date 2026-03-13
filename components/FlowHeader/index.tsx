import React from "react";
import {
  HeaderRoot,
  TopRow,
  BackButton,
  ProgressTrack,
  ProgressFill,
  SummaryButton,
} from "./styles";

const BackIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M15 18l-6-6 6-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export interface FlowHeaderProps {
  /** Progress as a percentage (0–100). Default 10. */
  progressPercent?: number;
  /** Called when the back button is clicked. */
  onBack?: () => void;
  /** Called when the SUMMARY button is clicked. */
  onSummary?: () => void;
  /** Label for the summary button. Default "SUMMARY". */
  summaryLabel?: string;
}

const FlowHeader: React.FC<FlowHeaderProps> = ({
  progressPercent = 10,
  onBack,
  onSummary,
  summaryLabel = "SUMMARY",
}) => {
  const percent = Math.min(100, Math.max(0, progressPercent));

  return (
    <>
      <HeaderRoot>
        <TopRow>
          <BackButton
            type="button"
            onClick={onBack}
            aria-label="Go back"
            title="Go back"
          >
            <BackIcon />
          </BackButton>
          {/* <SummaryButton type="button" onClick={() => onSummary?.()}>
            {summaryLabel}
          </SummaryButton> */}
        </TopRow>
      </HeaderRoot>
      <ProgressTrack
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Progress ${percent}%`}
      >
        <ProgressFill $percent={percent} />
      </ProgressTrack>
    </>
  );
};

export default FlowHeader;
