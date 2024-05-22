import { TabItemProps } from "@/types/TabTypes";
import { sanitizeForId } from "@/utils/stringUtils";
import { Collapse } from "react-bootstrap";

interface TabItemPropsAnimated extends TabItemProps {
  isActive?: boolean;
}

const TabItem: React.FC<TabItemPropsAnimated> = ({
  label,
  children,
  isActive = false,
}) => (
  <Collapse in={isActive}>
    <div
      className={`tab-content p-3 bg-light`}
      role="tabpanel"
      aria-labelledby={`tab-${sanitizeForId(label)}`}
      id={`panel-${sanitizeForId(label)}`}
    >
      {children}
    </div>
  </Collapse>
);

export default TabItem;
