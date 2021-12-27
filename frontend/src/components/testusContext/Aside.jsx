import React,{useContext, useEffect , useState} from "react";
import { NameContext } from "./test1";



function Aside() {
    const name = useContext(NameContext);
    const [ newName , setNewName] = useState(["n","e"]);

    useEffect(() => {
      
        setNewName([...newName,name])
        console.log(name)
        console.log("ovo je ispod name")
   
    }, []);

    console.log(name)
    console.log("ovo je izmedu name i newname")
    console.log(newName)

    return (
        <div>
            <h1>Aside name: {name} </h1>
            <h1>Aside newName: {newName} </h1>


        </div>
    )
}
export default Aside