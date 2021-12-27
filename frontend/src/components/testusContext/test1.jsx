import React,{useState} from "react"
import Aside from "./Aside";
import Main from "./Main"
export const NameContext = React.createContext();
export const name = React.createContext();


function Ape() {

    const [name] = useState("Nisvet")

        return(
            <div className="container text-center">
                <NameContext.Provider value={name} >
                    <Aside/>
                </NameContext.Provider> 
                
            </div>
            
        )
    
}

export default Ape;