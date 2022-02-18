import React from "react";
import { BsCalculator } from "react-icons/bs";

const Card = ({ cardTitle, cardIcon }) => {
  return (
    <div className="border border-yellow-500 md:h-[62px] h-[82px]">
      <div className="px-1 py-1 flex">
        {cardIcon}
        <h3 className="text-base font-semibold">{cardTitle}</h3>
      </div>
    </div>
  );
};

export default Card;
