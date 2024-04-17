import { createContext, useState } from "react";

const StudentStates = createContext({});

export const StudentStatesProvider = ({ children }) => {
  const [markAttendance, setAttendance] = useState({all:false});
  const [studentInview, setStudentinview] = useState({});

  return (
    <StudentStates.Provider
      value={{
        markAttendance,
        setAttendance,
      }}
    >
      {children}
    </StudentStates.Provider>
  );
};

export default StudentStates;
