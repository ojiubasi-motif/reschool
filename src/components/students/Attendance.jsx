import React, { useEffect } from "react";
import UseGlobalStates from "../../hooks/UseGlobalStates";
import { students } from "./data/mockUsers";
import { Avatar, AvatarGroup } from "rsuite";
import { IoIosPaper } from "react-icons/io";
import AttendanceTable from "./components/AttendanceTable";
import './styles/studentStyles.css'

const Attendance = () => {
  const { setTitle } = UseGlobalStates();
  const firstStudents = students.slice(0, 8);
  // console.log("==>", firstStudents);
  useEffect(() => {
    setTitle(() => "Attendance");
  }, []);

  return (
    <div>
      <nav className="p-2 flex flex-col justify-center items-between shadow-defaultShadow">
        <span className="mb-2 flex items-center justify-between">
          <div>
            <select className="mr-3">
              <option selected="" value="potential school">
                Potentials Academy
              </option>
            </select>
            <select className="mr-3">
              <option selected="" value="grade 6">
                Grade 6
              </option>
            </select>
            <select className="mr-3">
              <option selected="" value="diamond">
                Diamond
              </option>
            </select>
          </div>
          <span>
            <AvatarGroup stack>
              {firstStudents.map((user) => (
                <Avatar
                  bordered
                  size="sm"
                  circle
                  key={user.id}
                  src={user.avatar}
                  alt={user.first_name}
                />
              ))}
            </AvatarGroup>
          </span>
        </span>
        {/* =======filter====== */}
        <span className="flex justify-between items-center">
          <div className="flex items-center justify-start">
            <span className="me-3 flex justify-start items-center text-textColorGray font-light">
              Session:
              <p className="ms-1 font-bold text-textColorDark">2023/2024</p>
            </span>
            <span className="me-3  flex justify-start items-center text-textColorGray font-light">
              Term:
              <p className="ms-1 font-bold text-textColorDark">First</p>
            </span>
            <span className="me-3  flex justify-start items-center text-textColorGray font-light">
              Date:
              <p className="ms-1 font-bold text-textColorDark">
                22-01-24(Today)
              </p>
            </span>
          </div>
          <button className="px-2 py-1 bg-green-500 rounded-md text-textColorWhite flex justify-center items-center">
            <IoIosPaper />
            summary
          </button>
        </span>
      </nav>

      {/*--------attendance table---------- */}
      <AttendanceTable/>
    </div>
  );
};

export default Attendance;
