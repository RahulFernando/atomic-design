import React from "react";
import { Spacing } from "@ds.e/foundation";

interface MarginProps {
  space?: keyof typeof Spacing;
  left?: boolean;
  top?: boolean;
  right?: boolean;
  bottom?: boolean;
  children: React.ReactNode;
}

const Margin: React.FC<MarginProps> = ({
  space = "sm",
  bottom,
  left,
  right,
  top,
  children,
}) => {
  let className = "";

  if (!top && !right && !bottom && !left) className = `dse-margin-${space}`;

  if (top) className = `dse-margin-top-${space}`;
  if (right) className = `dse-margin-right-${space}`;
  if (bottom) className = `dse-margin-bottom-${space}`;
  if (left) className = `dse-margin-left-${space}`;

  return <div className={className}>{children}</div>;
};

export default Margin;
