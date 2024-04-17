import React from 'react'
import { students } from '../data/mockUsers'
import StudentRow from './StudentRow'

const Table = () => {
  return (
    <div className="basis-4/12 p-2 px-0 min-h-[98%] h-[98%] shadow-defaultShadow rounded-md overflow-scroll">
        {/* +++header--- */}
        <span className="sticky left-0 mb-2 p-2 flex justify-between items-center ">
          <h3 className="font-bold text-md text-textColorPrimary">Students</h3>
          <div
            className="flex items-center p-2 border border-primary border-2 rounded-md min-w-[50%]"
            style={{ backgroundColor: "transparent" }}
          >
            <input
              type="text"
              className=" text-dark"
              style={{
                backgroundColor: "var(--colorGray)",
                border: "none",
                outline: "none",
                width: "95%",
                height: "25px",
              }}
              placeholder="search for student or school"
            />
            {/* <IoSearch size={14} className=" text-primary" /> */}
          </div>
        </span>
        {/* ++++all students table+++++ */}

        <table class="h-[86%] table-fixed students-table">
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Student Id</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Grade</th>
              <th>Arm</th>
              <th>year</th>
            </tr>
          </thead>
          <tbody className="">
            {students.length > 0 ? (
              students.map((student, index) => (
                <StudentRow key={index} student={student} />
              ))
            ) : (
              <h5>No student record found</h5>
            )}
          </tbody>
        </table>
      </div>
  )
}

export default Table