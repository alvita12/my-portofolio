import Education from "../../components/education";
import ProjectCard from "../../components/project-card";
import pocoyo from "../../assets/pocoyo.jpeg";
import { useState } from "react";

interface Project {
  name: string;
  year: string;
  description: string;
}

interface Education {
  edu: string;
  year: string;
  description: string;
}

const LandingPage = () => {
  const [increment, setIncrement] = useState<number>(0);
  const [toggle, setToggle] = useState<boolean>(false);

  const projects: Project[] = [
    {
      name: "Project A",
      year: "2019-2020",
      description: "Lorem ipsum.",
    },
    {
      name: "Project B",
      year: "2020-2021",
      description: "Lorem ipsum.",
    },
  ];

  const education: Education[] = [
    {
      edu: "SMA Al-Izhar Pondok Labu",
      year: "2016-2019",
      description: "Pondok Labu",
    },
    {
      edu: "BINUS Online Learning",
      year: "2023 - present",
      description: "Online",
    },
  ];

  const handleIncrement = () => {
    setIncrement((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setIncrement((prev) => (prev >= 1 ? prev - 1 : prev));
  };

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center items-center">
        <p>{increment} Increment</p>

        <div className="flex flex-row gap-5">
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleDecrement}>Decrement</button>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        {toggle ? <div>show hide component</div> : <></>}

        <button onClick={handleToggle}>{toggle ? "Hide" : "Show"}</button>
      </div>

      <section className="flex flex-row justify-evenly items-center m-5">
        <div className="flex flex-col font-bold">
          <h1 className="text-3xl">Hello!</h1>
          <p className="text-semibold">Alvita Kridaprakosa</p>
        </div>
        <img src={pocoyo} className="w-60 rounder-sm" />
      </section>

      <section className="flex flex-col px-10 py-10 bg-slate-200 gap-5">
        <label className="font-bold text-lg">Summary</label>
        <p className="text-base text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>

      <section className="flex flex-col px-10 py-10 gap-5">
        <label className="font-bold text-lg">Projects</label>

        {projects.map((item: Project, index: number) => (
          <ProjectCard
            key={index}
            name={item.name}
            year={item.year}
            description={item.description}
            bgColor={`${index % 2 === 0 ? "bg-slate-200" : ""}`}
          />
        ))}
      </section>

      <section className="flex flex-col px-10 py-10 bg-slate-200 gap-5">
        <label className="font-bold text-lg">Education</label>

        {education.map((item: Education, index: number) => (
          <Education
            key={index}
            edu={item.edu}
            year={item.year}
            description={item.description}
            bgColor={`${index % 2 === 0 ? "bg-white" : ""}`}
          />
        ))}
      </section>
    </div>
  );
};

export default LandingPage;
