import React, { useEffect, useState } from "react";
import UseGlobalStates from "../../hooks/UseGlobalStates";
import { IoSearch, IoNotifications } from "react-icons/io5";
import { Dropdown, Avatar, Badge, Button } from "rsuite";
import userImg from "../../../public/img/user.png";

const renderAvatar = (props) => <Avatar circle {...props} src={userImg} />;

const Topnav = () => {
  const { navTitle } = UseGlobalStates();

  return (
    <div className="absolute top-0 min-w-[100%] flex justify-between items-center p-3 rounded-md shadow-defaultShadow">
      <p className=" font-extrabold text-xl text-textColorPrimary">
        {navTitle}
      </p>

      <span className="basis-4/6 flex justify-between items-center">
        {/* ========search========= */}
        <div
          className="flex items-center ps-2 p-1 border border-primary border-2 rounded-md min-w-[80%]"
          style={{ backgroundColor: "transparent" }}
        >
          <input
            type="text"
            className=" text-dark"
            style={{
              backgroundColor: "inherit",
              border: "none",
              outline: "none",
              width: "95%",
              height: "25px",
            }}
            placeholder="search for student or school"
          />
          <IoSearch size={14} className=" text-primary" />
        </div>

        {/* ======notification===== */}
        <Badge content={999}>
          <Button>
            <IoNotifications size={16} />
          </Button>
        </Badge>

        {/* ======user====== */}
        <Dropdown placement="bottomEnd" renderToggle={renderAvatar}>
          <Dropdown.Item>Your profile</Dropdown.Item>
          <Dropdown.Item>Your stars</Dropdown.Item>
          <Dropdown.Item>Your Gists</Dropdown.Item>
          <Dropdown.Separator />
          <Dropdown.Item>Help</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
      </span>
    </div>
  );
};

export default Topnav;