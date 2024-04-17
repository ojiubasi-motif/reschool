import { Navigate, Route, Routes } from "react-router-dom";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Home from "./components/layout/Home";
import Unauthorized from "./components/pages/Unauthorized";
import Dashboard from "./components/pages/Dashboard";
import Attendance from "./components/students/Attendance";
import ScoresView from "./components/scores/ScoresView";
import MissingPage from "./components/pages/MissingPage";
import Allstudents from "./components/students/Allstudents";
import CreateScores from "./components/scores/CreateScores";

function App() {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login/>} />
        <Route path="signup" element={<Signup/>} />

        <Route path="/" element={<Home/>} >
          <Route path="" element={<Unauthorized/>}/>
          <Route index element={<Dashboard/>} />
          <Route path="attendance" element={<Attendance/>} />
          <Route path="scores" element={<ScoresView/>} />
          <Route path="students" element={<Allstudents/>} />
          <Route path="createscores" element={<CreateScores/>} />

        </Route>

        <Route path="*" element={<MissingPage/>} />
      </Routes>
    </>
  );
}

export default App;
