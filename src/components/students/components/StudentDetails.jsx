import React from "react";
import UseGlobalStates from "../../../hooks/UseGlobalStates";
import { Avatar } from "rsuite";
import { MdEdit } from "react-icons/md";

const StudentDetails = () => {
  const { studentInview } = UseGlobalStates();
  return (
    <div className="p-2 h-[98%] max-h-[98%] shadow-defaultShadow rounded-md basis-4/12 overflow-y-auto">
      <span className="text-textColorPrimary flex justify-between items-center">
        <h3 className="font-bold">Personal details</h3>
        <p className=" ">Student-ID:{` #${studentInview?.id}`}</p>
      </span>
      <hr />
      <div className="">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-textColorPrimary">Basic</h3>
          <button className="px-2 py-1 bg-green-500 rounded-md text-textColorWhite flex justify-center items-center">
            <MdEdit />
            Edit
          </button>
        </div>

        <span className="flex justify-between py-2">
          <Avatar size="xl" src={studentInview?.avatar} circle />
          <div className="basis-4/6 grid grid-cols-2 grid-rows-4">
            <span className=" flex justify-start items-center text-textColorGray font-light">
              First name:
              <p className="ms-1 font-bold text-textColorDark">
                {studentInview?.first_name}
              </p>
            </span>
            <span className=" flex justify-start items-center text-textColorGray font-light">
              Last name:
              <p className="ms-1 font-bold text-textColorDark">
                {studentInview?.last_name}
              </p>
            </span>
            <span className=" flex justify-start items-center text-textColorGray font-light">
              Grade:
              <p className="ms-1 font-bold text-textColorDark">
                {studentInview?.grade}
              </p>
            </span>
            <span className=" flex justify-start items-center text-textColorGray font-light">
              Arm:
              <p className="ms-1 font-bold text-textColorDark">
                {studentInview?.arm}
              </p>
            </span>
            <span className=" flex justify-start items-center text-textColorGray font-light">
              Admission:
              <p className="ms-1 font-bold text-textColorDark">
                {studentInview?.year}
              </p>
            </span>
            <span className=" flex justify-start items-center text-textColorGray font-light">
              Gender:
              <p className="ms-1 font-bold text-textColorDark">
                {studentInview?.gender}
              </p>
            </span>
            <span className="col-span-2 flex justify-start items-center text-textColorGray font-light">
              Date of Birth:
              <p className="ms-1 font-bold text-textColorDark">
                {studentInview?.dob}
              </p>
            </span>
            <span className=" col-span-2 flex justify-start items-center text-textColorGray font-light">
              Address:
              <p className="ms-1 font-bold text-textColorDark">
                {studentInview?.address}
              </p>
            </span>
          </div>
        </span>
      </div>
      <hr />
      <span className="">
        <h3 className="text-textColorPrimary font-bold">About</h3>
        <p className="text-textColorGray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          sed totam est culpa aperiam autem reiciendis. Ducimus placeat vel
          labore amet similique tempore neque at consequuntur delectus, quod
          ipsam nihil!
        </p>
      </span>
      <hr />
      <div>
        <h3 className="text-textColorPrimary font-bold">Education history</h3>
        <span>
          <h6 className="font-bold">2008-2009</h6>
          <p className="italic text-textColorGray font-light">
            Creche at Potential kids nurs/primary school, lugbe
          </p>
        </span>
        <span>
          <h6 className="font-bold">2009-2011</h6>
          <p className="italic text-textColorGray font-light">
            Nursery at Potential kids nurs/primary school, lugbe
          </p>
        </span>
        <span>
          <h6 className="font-bold">2011-2014</h6>
          <p className="italic text-textColorGray font-light">
            primary at Potential kids nurs/primary school, lugbe
          </p>
        </span>
      </div>
    </div>
  );
};

export default StudentDetails;
