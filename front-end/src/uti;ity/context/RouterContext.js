/* eslint-disable */

import React, { createContext, useContext, useState, useEffect } from 'react';
const RouteContext = createContext();

export const useRoute = () => {
    return useContext(RouteContext);
};

export const RouteProvider = ({ children }) => {
    const [currentRoute, setCurrentRoute] = useState('/');
    return (
        <RouteContext.Provider value={{ currentRoute, setCurrentRoute }}>
            {children}
        </RouteContext.Provider>
    );
};
