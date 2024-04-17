import { createContext, useState } from "react";

const GlobalStates = createContext({});

export const  GlobalStatesProvider = ({children})=>{
const [navTitle, setTitle] = useState("");
const [studentInview, setStudentinview] = useState({});


    return (
        <GlobalStates.Provider
        value={{
            navTitle,
            setTitle,
            studentInview,
            setStudentinview
        }}
        >
            {children}
        </GlobalStates.Provider>
    )
}

export default GlobalStates;