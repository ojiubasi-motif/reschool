/* eslint-disable no-unused-vars */
import Topnav from "./Topnav";
import { Outlet } from "react-router-dom";
import Sidenav from "./Sidenav";
import { StudentStatesProvider } from "../students/contexts/StudentStates";

const Home = () => {
  return (
    <div className="flex p-2">
      <StudentStatesProvider>
        <div className="basis-[150px]" style={{ zIndex: "99" }}>
          <Sidenav />
        </div>
        <div className="basis-11/12 ms-3 flex flex-col px-0 mx-0 relative">
          <Topnav />
          <div className="mt-[13vh] ">
            <Outlet />
          </div>
        </div>
      </StudentStatesProvider>
    </div>
  );
};

export default Home;
