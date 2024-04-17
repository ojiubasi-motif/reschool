import { useContext } from "react"
import StudentStates from "../contexts/StudentStates";

const UseStudentsStates = ()=>{
    return useContext(StudentStates);
}

export default UseStudentsStates