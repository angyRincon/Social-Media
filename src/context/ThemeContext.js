import {createContext, useState} from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState('dark');

    const handleSwitchTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

    return <ThemeContext.Provider value={{theme, handleSwitchTheme}}>
        {children}
    </ThemeContext.Provider>
}
