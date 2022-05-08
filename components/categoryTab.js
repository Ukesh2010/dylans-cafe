import React, {useState} from "react";
import {categoryList} from '../pages/api/data';

const CategoryTab = ({onChange}) => {
  const [activeTab, setActiveTab] = useState('cakes');

  const onTabClick = (categoryCode) => {
    setActiveTab(categoryCode);
    onChange(categoryCode);
  };

  return (
    <div className="tab-container tab-solid same-width">
        {categoryList.map((category, index) => (
          <button className={`tab-item ${activeTab === category.code ? "active" : ""}`}
                  onClick={() => onTabClick(category.code)} key={category.code}>
            <span>{category.name}</span>
          </button>
        ))}
    </div>
  );
};

export default CategoryTab;