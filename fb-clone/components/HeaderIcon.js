import React from "react";

const HeaderIcon = ({ Icon, active }) => {
  return (
    <div
      className="active:border-b-2
     active:border-blue-500
      cursor-pointer 
      group items-center
       md:px-10 sm:h-14 
       rounded-xl
       md:hover:bg-gray-100 mt-2"
    >
      <Icon
        className={`h-5 items-center sm:h-7 mx-auto text-gray-500 group-hover:text-blue-500
        ${active && "text-blue-500"}`}
      />
    </div>
  );
};

export default HeaderIcon;
