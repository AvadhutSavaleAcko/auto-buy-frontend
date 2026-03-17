import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import {
  Card,
  IdvDisplayRow,
  IdvLabel,
  IdvAmount,
  IdvUnit,
  SliderWrapper,
  SliderLabels,
  SliderLabel,
  ResetButton,
} from "./styles";

export interface IDVSelectorProps {
  /** Minimum IDV in lakhs (e.g. 15) */
  minIdv: number;
  /** Maximum IDV in lakhs (e.g. 18) */
  maxIdv: number;
  /** Current selected IDV in lakhs */
  value: number;
  /** Called when value changes */
  onChange: (value: number) => void;
  /** Value to reset to when Reset is clicked. Defaults to initialIdv or minIdv */
  resetValue?: number;
  /** Optional aria-label for the slider */
  ariaLabel?: string;
}

const IDVSelector: React.FC<IDVSelectorProps> = ({
  minIdv,
  maxIdv,
  value,
  onChange,
  resetValue,
  ariaLabel = "IDV selection",
}) => {
  const handleReset = () => {
    onChange(resetValue ?? minIdv);
  };

  const formatLakh = (n: number) => `₹${n} lakh`;

  return (
    <Card>
      <IdvDisplayRow>
        <IdvLabel>IDV:</IdvLabel>
        <IdvAmount>₹{value}</IdvAmount>
        <IdvUnit>lakh</IdvUnit>
      </IdvDisplayRow>

      <SliderWrapper>
        <Slider
          min={minIdv}
          max={maxIdv}
          value={value}
          onChange={(val: number | number[]) => onChange(Array.isArray(val) ? val[0] : val)}
          trackStyle={{ backgroundColor: "#38A548", height: 4 }}
          railStyle={{ backgroundColor: "#D5CAE8", height: 4 }}
          handleStyle={{
            borderColor: "#3AC77E",
            backgroundColor: "#3AC77E",
            width: 16,
            height: 16,
            marginTop: -6,
            boxShadow:
              "inset 0px -0.67px 1.33px 0px rgba(19, 134, 74, 1), inset 0px 0.67px 1.33px 0px rgba(153, 229, 164, 1)",
          }}
          aria-label={ariaLabel}
        />
        <SliderLabels>
          <SliderLabel>{formatLakh(minIdv)}</SliderLabel>
          <SliderLabel>{formatLakh(maxIdv)}</SliderLabel>
        </SliderLabels>
      </SliderWrapper>

      <ResetButton type="button" onClick={handleReset} aria-label="Reset IDV">
        Reset
      </ResetButton>
    </Card>
  );
};

export default IDVSelector;
