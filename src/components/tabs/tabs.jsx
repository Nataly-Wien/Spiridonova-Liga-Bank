import './tabs.scss';
import React, {useState} from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import TabsControls from '../tabs-controls/tabs-controls';
import Service from '../service/service';
import SliderControls from '../slider-controls/slider-controls';
import {CURRENT_TAB, TABS_DATA, SliderTypes, RefLinks} from '../../const';

const Tabs = () => {
  const [currentTab, setCurrentTab] = useState(CURRENT_TAB);

  const handleTabClick = (tabNumber) => setCurrentTab(tabNumber);

  return (
    <ScrollableAnchor id={RefLinks.SERVICES} >
      <section className="tabs container container--tabs">
        <TabsControls currentTab={currentTab} onTabClick={handleTabClick} onTabsScroll={handleTabClick} >
          {TABS_DATA.map((item, i) => {
            return (
              <Service title={item.title} features={item.features} buttonText={item.buttonText} text={item.text}
                textLink={item.textLink} buttonRef={item.buttonRef} tabNumber={i + 1} currentTab={currentTab} key={`${item.title}-${item.features[0]}`} />
            );
          })}
        </TabsControls>
        <SliderControls type={SliderTypes.TABS} currentSlide={currentTab} />
      </section>
    </ScrollableAnchor>
  );
};

export default Tabs;
