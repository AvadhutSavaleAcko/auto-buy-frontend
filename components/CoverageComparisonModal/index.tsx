import React, { FC } from "react";
import Modal from "../Modal";
import { ModalStickyFooter } from "../Modal/styles";
import {
  TableWrapper,
  TableHeader,
  TableHeaderCell,
  TableRow,
  FeatureCell,
  IconCell,
  OkayButton,
} from "./styles";

const CheckIcon: FC<{ size?: number }> = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <circle cx="12" cy="12" r="12" fill="#6815E4" />
    <path
      d="M7 12l3 3 7-7"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CrossIcon: FC<{ size?: number }> = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <circle cx="12" cy="12" r="12" fill="#fff" stroke="#7A787D" strokeWidth="1.5" />
    <path
      d="M8 8l8 8M16 8l-8 8"
      stroke="#7A787D"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const COVERAGE_ROWS: Array<{
  feature: string;
  thirdParty: boolean;
  comprehensive: boolean;
}> = [
  { feature: "Third party injury/death", thirdParty: true, comprehensive: true },
  {
    feature: "Third party property damage",
    thirdParty: true,
    comprehensive: true,
  },
  {
    feature: "Accidental damage to your car",
    thirdParty: false,
    comprehensive: true,
  },
  {
    feature: "Fire, theft, and natural calamities",
    thirdParty: false,
    comprehensive: true,
  },
  { feature: "Zero depreciation", thirdParty: false, comprehensive: true },
];

export interface CoverageComparisonModalProps {
  show: boolean;
  onClose: () => void;
  onOkay?: () => void;
}

const CoverageComparisonModal: FC<CoverageComparisonModalProps> = ({
  show,
  onClose,
  onOkay,
}) => {
  const handleOkay = () => {
    onOkay?.();
    onClose();
  };

  return (
    <Modal
      show={show}
      onClose={onClose}
      modalHeading="Coverage comparison"
      maxWidth="360px"
      footer={
        <ModalStickyFooter>
          <OkayButton type="button" onClick={handleOkay}>
            Okay
          </OkayButton>
        </ModalStickyFooter>
      }
    >
      <TableWrapper>
        <TableHeader>
          <TableHeaderCell $spacer />
          <TableHeaderCell>Third-party</TableHeaderCell>
          <TableHeaderCell $highlight>Comprehensive</TableHeaderCell>
        </TableHeader>
        {COVERAGE_ROWS.map((row) => (
          <TableRow key={row.feature}>
            <FeatureCell>{row.feature}</FeatureCell>
            <IconCell>
              {row.thirdParty ? <CheckIcon /> : <CrossIcon />}
            </IconCell>
            <IconCell $highlight>
              {row.comprehensive ? <CheckIcon /> : <CrossIcon />}
            </IconCell>
          </TableRow>
        ))}
      </TableWrapper>
    </Modal>
  );
};

export default CoverageComparisonModal;
