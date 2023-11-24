import React from "react";

const WorkCard = (props) => {
  return (
    <div className=" flex flex-col lg:flex-row py-4">
      <div className=" w-full lg:w-2/4">
        <h2 className=" font-semibold">{props.title}</h2>
        <div className="mt-2">
          <p>Full-Time</p>
          <p>May 2023 - Present</p>
        </div>
      </div>
      <div>
        <h2 className=" font-semibold mt-2 lg:mt-0">
          Code for Core Innovation Private Linited
        </h2>
        <p className=" mt-2">
          Working as Full time React JS fronted Web Developer
        </p>
        <div className=" bg-slate-500 w-full h-0.5 mt-2"></div>
      </div>
    </div>
  );
};

export default WorkCard;
