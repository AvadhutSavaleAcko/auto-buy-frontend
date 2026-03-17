declare module "rc-slider" {
  import { Component } from "react";

  export interface SliderProps {
    min?: number;
    max?: number;
    value?: number;
    defaultValue?: number;
    onChange?: (value: number) => void;
    trackStyle?: React.CSSProperties;
    railStyle?: React.CSSProperties;
    handleStyle?: React.CSSProperties;
    "aria-label"?: string;
  }

  const Slider: React.FC<SliderProps>;
  export default Slider;
}
