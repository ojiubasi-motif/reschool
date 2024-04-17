import { MdDashboard, MdMenuBook } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { FaSchoolCircleCheck } from "react-icons/fa6";
import { GiCheckMark } from "react-icons/gi";

export const sidenavItems = [
  {
    link: "",
    title: "Dashboard",
    icon: <MdDashboard className="me-2" size={16} />,
  },
  {
    link: "students",
    title: "All students",
    icon: <PiStudentFill className="me-2" size={16} />,
  },
  {
    link: "attendance",
    title: "Attendance",
    icon: <FaSchoolCircleCheck className="me-2" size={16} />,
  },
  {
    link: "createscore",
    title: "Create score",
    icon: <GiCheckMark className="me-2" size={16} />,
  },
  {
    link: "scores",
    title: "View scores",
    icon: <MdMenuBook className="me-2" size={16} />,
  },
  // {link:'',title:'',icon:''},
];
