import React from "react";
import { Avatar } from "rsuite";
import UseGlobalStates from "../../../hooks/UseGlobalStates";
const StudentRow = (props) => {
  const { student } = props;
  const {studentInview,setStudentinview} = UseGlobalStates()

  const handleClick =()=>{
    setStudentinview(()=>student)
  }

  return (
    <tr onClick={handleClick} className={`hover:cursor-pointer ${student?.id === studentInview?.id?'bg-bgPrimary text-textColorWhite':''}`}>
      <td className={`${student?.id === studentInview?.id?'!bg-inherit':''}`}>
        <Avatar src={student?.avatar} size="sm" circle />
      </td>
      <td className={`${student?.id === studentInview?.id?'!bg-inherit text-textColorWhite':''}`}>{student?.id}</td>
      <td>{student?.first_name}</td>
      <td>{student?.last_name}</td>
      <td>{student?.grade}</td>
      <td>{student?.arm}</td>
      <td>{student?.year}</td>
    </tr>
  );
};

export default StudentRow;