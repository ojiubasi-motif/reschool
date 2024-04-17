import React from "react";
import { Avatar, Dropdown } from "rsuite";
import UseStudentsStates from "../hooks/UseStudentsStates";
const renderLabel = (props) => <span {...props}>Action </span>;

const AttendanceRow = (props) => {
  const { student, index } = props;
  const { markAttendance, setAttendance } = UseStudentsStates();

  const handleChange = (e) => {
    const { type, checked, value, name } = e.target;
    type === "checkbox" && name == student?.id && checked
      ? setAttendance(() => {
          return { ...markAttendance, [name]: true };
        })
      : type === "checkbox" && name == student?.id && !checked
      ? setAttendance(() => {
          return { ...markAttendance, [name]: false };
        })
      : null;
      console.log("the attendance for ", name, "==>", markAttendance);
  };
  // console.log('the index==>', key);

  return (
    <tr
      className={`${index % 2 == 0 ? "bg-gray-200 text-textColorBlack" : ""}`}
    >
      <td className={``}>
        <Avatar src={student?.avatar} size="sm" circle />
      </td>
      <td className={``}>{student?.id}</td>
      <td>{student?.first_name}</td>
      <td>{student?.last_name}</td>
      <td>
        <input
          name={student?.id}
          onChange={handleChange}
          type="checkbox"
          checked={markAttendance[JSON.stringify(student?.id)] ?markAttendance[JSON.stringify(student?.id)]: markAttendance?.all}
        />
      </td>
      <td>
        <Dropdown placement="bottomEnd" renderToggle={renderLabel}>
          <Dropdown.Item>Your profile</Dropdown.Item>
          <Dropdown.Item>Your stars</Dropdown.Item>
          <Dropdown.Item>Your Gists</Dropdown.Item>
        </Dropdown>
      </td>
      {/* <td>{student?.grade}</td>
      <td>{student?.arm}</td>
      <td>{student?.year}</td> */}
    </tr>
  );
};

export default AttendanceRow;
