import React from "react";

export type IconName =
  | "car"
  | "comprehensive"
  | "calendar"
  | "discount-coupon"
  | "discount-offer-save"
  | "money";

const ICON_PATHS: Record<IconName, string> = {
  car: "/icons/car.svg",
  comprehensive: "/icons/Comprehensive.svg",
  calendar: "/icons/Calendar.svg",
  "discount-coupon": "/icons/Discount-coupon.svg",
  "discount-offer-save": "/icons/discount_offer_save.svg",
  money: "/icons/Money.svg",
};

export interface IconProps {
  name: IconName;
  size?: number;
  "aria-hidden"?: boolean;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 18,
  "aria-hidden": ariaHidden = true,
}) => (
  <img
    src={ICON_PATHS[name]}
    alt=""
    width={size}
    height={size}
    aria-hidden={ariaHidden}
  />
);

export default Icon;
