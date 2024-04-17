import { useContext } from "react"
import GlobalStates from "../contexts/GlobalStates"

const UseGlobalStates = ()=>{
    return useContext(GlobalStates);
}

export default UseGlobalStates