import { TabItemProps } from "@/types/TabTypes";
import { sanitizeForId } from "@/utils/stringUtils";

const TabItem: React.FC<TabItemProps> = ({ label, children }) => (
  <div
    className="tab-content"
    role="tabpanel"
    aria-labelledby={`tab-${sanitizeForId(label)}`}
  >
    {children}
  </div>
);

export default TabItem;
