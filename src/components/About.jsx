import React from "react";
import SkillCard from "../layouts/SkillCard";

const About = () => {
  const skill1 = "w-11/12";
  const skill2 = "w-4/5";
  const skill3 = "w-2/3";

  return (
    <div className=" min-h-screen flex flex-col justify-around lg:gap-8 lg:px-32 px-5 bg-backgroundColor">
      <div className=" mt-16">
        <h1 className=" text-4xl font-semibold text-center lg:mt-2">
          About Me
        </h1>
      </div>

      <div className=" -mt-10">
        <div className=" mb-10">
          <h2 className=" text-3xl font-semibold">I'm Anish Pokhrel</h2>
          <p className=" mt-4 lg:mt-2">
            I am a recent IT graduate with a passion for web development,
            particularly in React JS. My educational background has equipped me
            with a strong foundation in computer science, while my hands-on
            experience as a web developer has honed my skills in building
            responsive and user-friendly web applications. I am a dedicated and
            motivated individual eager to contribute my knowledge and expertise
            to innovative projects and continue my growth in the field.
          </p>
        </div>

        <div>
          <h2 className=" text-3xl font-semibold ">My Skills</h2>

          <div>
            <SkillCard title="Html" width={skill1} val="95%" />
            <SkillCard title="SCSS" width={skill2} val="85%" />
            <SkillCard title="CSS" width={skill2} val="85%" />
            <SkillCard title="JavaScript" width={skill3} val="70%" />
            <SkillCard title="ReactJS" width={skill3} val="70%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
