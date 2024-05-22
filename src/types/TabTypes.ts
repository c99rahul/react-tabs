import { ReactElement, ReactNode } from "react";

export interface TabItemProps {
  label: string;
  children: ReactNode;
}

export interface TabListProps {
  activeTabIndex: number;
  children: ReactElement<TabItemProps> | ReactElement<TabItemProps>[];
}
