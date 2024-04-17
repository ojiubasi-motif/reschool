import React from "react";
import { students } from "../data/mockUsers";
import AttendanceRow from "./AttendanceRow";
import UseStudentsStates from "../hooks/UseStudentsStates";

const AttendanceTable = () => {
  const { markAttendance, setAttendance } = UseStudentsStates();

  const handleChange = (e) => {
    const { type, checked, value, name } = e.target;
    type === "checkbox" && name === "all" && checked
      ? setAttendance(() => {
          return { ...markAttendance, all: true };
        })
      : type === "checkbox" && name === "all" && !checked
      ? setAttendance(() => {
          return { ...markAttendance, all: false };
        })
      : null;
  };

  return (
    <div>
      <table className="mt-3 h-[90%] w-[98%] table-fixed attendance_table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Student Id</th>
            <th>First name</th>
            <th>Last name</th>
            <th>
              Attendance
              <p className="text-textColorPrimary flex justify-center items-center">
                Mark All{" "}
                <input
                  onChange={handleChange}
                  className="ms-1"
                  name="all"
                  type="checkbox"
                  checked={markAttendance?.all}
                />
              </p>
            </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="">
          {students.length > 0 ? (
            students.map((student, index) => (
              <AttendanceRow key={index} index={index} student={student} />
            ))
          ) : (
            <h5>No student record found</h5>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTable;
