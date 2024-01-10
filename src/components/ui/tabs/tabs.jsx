import { TabToggler, TabHeader, TabItem, TabContent } from "./style";
import { useState } from "react";

function Tabs({ tabs = [], maxTabContent }) {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div>
      <TabHeader>
        {tabs.map((tab, index) => (
          <TabItem key={`tab-${index}`}>
            <TabToggler
              $isSelect={tabIndex === index}
              {...(tabIndex === index
                ? { as: "span" }
                : {
                    onClick: () => {
                      setTabIndex(index);
                    },
                  })}
            >
              {tab.title}
            </TabToggler>
          </TabItem>
        ))}
      </TabHeader>
      <TabContent $maxTabContentHeiht={maxTabContent}>
        {tabs[tabIndex].content}
      </TabContent>
    </div>
  );
}

export default Tabs;
