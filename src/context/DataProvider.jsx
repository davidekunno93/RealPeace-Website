import { createContext, useState } from "react"


const DataProvider = (props) => {

    const [authUser, setAuthUser] = useState(null);

    return (
        <DataContext.Provider value={{ "authUser": authUser, "setAuthUser": setAuthUser }}>
            {props.children}
        </DataContext.Provider>
    )
}
export default DataProvider;
export const DataContext = createContext();