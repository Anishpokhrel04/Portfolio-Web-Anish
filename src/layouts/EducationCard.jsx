import React from "react";

const EducationCard = (props) => {
  return (
    <div className=" flex flex-col lg:flex-row py-4">
      <div className=" w-full lg:w-2/4">
        <h2 className=" font-semibold">{props.title}</h2>
        <div className="mt-2">
          <p>Student</p>
          <p>Feb 2019 - Present</p>
        </div>
      </div>
      <div>
        <h2 className=" font-semibold mt-2 lg:mt-0">
          Bachelors of Science in Computer Science and Information technology
        </h2>
        <p className=" mt-2">
          Studied From Mahendra Morang Aadarsh Multiple Campus Biratnagr.
        </p>
        <div className=" bg-slate-500 w-full h-0.5 mt-2"></div>
      </div>
    </div>
  );
};

export default EducationCard;
