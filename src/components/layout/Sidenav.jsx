import { Link, NavLink } from "react-router-dom/dist";
import Logo from "../../../public/img/logo.png";
import { sidenavItems } from "../../constants/sidenavItems";


const Sidenav = () => {
  return (
    <div className=' min-h-[95vh] text-textColorWhite p-2 rounded-md bg-bgPrimary shadow-defaultShadow'>
      {/* ======logo======== */}
      <div
        className="flex justify-center items-center p-2"
        style={{ cursor: "pointer", height: "60px" }}
      >
        <Link to="/" className="text-decoration-none">
          <span
            className="flex justify-center items-center ps-2"
            style={{ width: "70%" }}
          >
            <img
              className="me-1"
              src={Logo}
              alt="logo-img"
              style={{ width: "35px", height: "35px" }}
            />
            <h6 className=" font-bold text-colorl mt-1">ReSchool</h6>
          </span>
        </Link>
      </div>
      {/* ===logo-end===== */}
      {/* ======nav items===== */}
      <ul className="mt-2 sidebar">
        {
          sidenavItems?.map((item,index)=>(
            <li className="mt-1" key={index}>
              <NavLink className="flex justify-start items-center font-normal text-lg" to={item?.link}
              style={({ isActive }) => {
                return isActive
                  ? { color: "var(--primary-color)", backgroundColor: "var(--color-white)",padding:"3px", borderRadius:"5px" }
                  : { color: "inherit" };
              }}>
                {item?.icon}
                {item?.title}
              </NavLink>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Sidenav