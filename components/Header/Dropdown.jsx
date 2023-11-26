import React from "react";

const Dropdown = ({ type, name, children }) => {
  return (
    <div className="header-category group">
      <div className="flex">
        <div>
          {type == "category" ? (
            <p className="header-category-name transition-all duration-700 group-hover:font-semibold">
              {name}
            </p>
          ) : (
            <div className="h-[40px] w-[40px] rounded-full border-2 border-gray-500">
              <img src="../../image/default-image.jpg" alt="" className="h-100 w-100" />
            </div>
          )}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path
            className="fill-secondary"
            d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"
          ></path>
        </svg>
      </div>
      <div className="header-sub-category group-hover:block">
        <div className="header-sub-category-parent">
          <ul>{children}</ul>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;