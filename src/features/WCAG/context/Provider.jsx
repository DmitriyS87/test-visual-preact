import { createContext } from "preact";
import SRNotification from "../components/SRNotification/SRNotification";
import { useState } from "preact/hooks";


const context = createContext(null);

const Provider = ({children}) => {
    const [message, setMessage] = useState('')
    const srNotify = (text) => {
        setMessage(text)
    }
    const srClearNotification = () => {
        setMessage('')
    }

    return (
        <context.Provider value={{
            state: { message },
            actions: { srNotify, srClearNotification }
        }}>
            <SRNotification />
            {children}
        </context.Provider>)
}

export { context as WCAGContext, Provider as WCAGProvider };