import React from "react";
import { Outer, Box, Content } from "./styles";

export interface PageBoxLayoutProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  className?: string;
}

const PageBoxLayout: React.FC<PageBoxLayoutProps> = ({
  children,
  header,
  className,
}) => {
  return (
    <Outer className={className}>
      <Box>
        {header}
        <Content>{children}</Content>
      </Box>
    </Outer>
  );
};

export default PageBoxLayout;
