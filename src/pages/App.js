import React from 'react';
import {ThemeContextProvider} from "../context/ThemeContext";
import Layout from "./Layout/Layout";

const App = () => {
    return (
        <ThemeContextProvider>
            <Layout />
        </ThemeContextProvider>
    );
};

export default App;