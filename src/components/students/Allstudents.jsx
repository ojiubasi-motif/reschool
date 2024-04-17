import React, { useEffect } from "react";
import UseGlobalStates from "../../hooks/UseGlobalStates";
import Table from "./components/Table";
import StudentDetails from "./components/StudentDetails";
import StatsAndIssues from "./components/StatsAndIssues";
import './styles/studentStyles.css' 

const Allstudents = () => {
  const { setTitle } = UseGlobalStates();

  useEffect(() => {
    setTitle(() => "All students");
  }, []);

  return (
    <div className="flex justify-between max-h-[85vh] h-[85vh]">
      {/* ---all students */}
      <Table/>
      {/* ----student details */}
      <StudentDetails/>
      {/* ----student stats et al */}
      <StatsAndIssues/>
    </div>
  );
};

export default Allstudents;