import React from "react";
import { ReactElement, useState } from "react";
import TabItem from "@/components/Tabs/TabItem";
import { TabItemProps, TabListProps } from "@/types/TabTypes";
import { sanitizeForId } from "@/utils/stringUtils";
// import "./Tabs.css";

import Button from "react-bootstrap/Button";
import { Nav } from "react-bootstrap";

const TabList: React.FC<TabListProps> = ({ children, activeTabIndex = 0 }) => {
  const [activeTab, setActiveTab] = useState(activeTabIndex);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const tabs = React.Children.toArray(children).filter(
    (child): child is ReactElement<TabItemProps> =>
      React.isValidElement(child) && child.type === TabItem
  );

  return (
    <div className="custom-tabs">
      <Nav
        className="border-bottom pb-3 gap-2 justify-content-center"
        as="ul"
        role="tablist"
        aria-orientation="horizontal"
      >
        {tabs.map((tab, index) => (
          <Nav.Item key={index} as="li">
            <Button
              variant={activeTab === index ? "primary" : "outline-primary"}
              key={`tab-btn-${index}`}
              role="tab"
              id={`tab-${sanitizeForId(tab.props.label)}`}
              aria-controls={`panel-${sanitizeForId(tab.props.label)}`}
              aria-selected={activeTab === index}
              onClick={() => handleTabClick(index)}
            >
              {tab.props.label}
            </Button>
          </Nav.Item>
        ))}
      </Nav>

      {tabs.map((tab, index) => (
        <TabItem
          key={index}
          label={tab.props.label}
          isActive={activeTab === index}
        >
          {tab.props.children}
        </TabItem>
      ))}
    </div>
  );
};

export default TabList;
