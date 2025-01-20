import React, { createContext, useContext, useState } from 'react';

interface RequiredContextType {
    requiredFields: Record<string, boolean>;
    setFieldRequired: (field: string, value: boolean) => void;
}

const RequiredContext = createContext<RequiredContextType>({
    requiredFields: {},
    setFieldRequired: () => { },
});

export const RequiredProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [requiredFields, setRequiredFields] = useState<Record<string, boolean>>({});

    const setFieldRequired = (field: string, value: boolean) => {
        setRequiredFields(prev => ({
            ...prev,
            [field]: value
        }));
    };

    return (
        <RequiredContext.Provider value={{ requiredFields, setFieldRequired }}>
            {children}
        </RequiredContext.Provider>
    );
};

export const useRequired = () => useContext(RequiredContext);