import { createContext, useMemo } from 'react';
import useNewText from '../useNewText';

export const NewTextContext = createContext();

function UseNewTextProvider({ children }) {
    const {
        isAbout,
        isProjects,
        isContact,
        toggleIsAbout,
        toggleIsProjects,
        toggleIsContact,
    } = useNewText();

    const context = useMemo(() => ({
        isAbout,
        isProjects,
        isContact,
        toggleIsAbout,
        toggleIsProjects,
        toggleIsContact,
    }), [
        isAbout,
        isProjects,
        isContact,
        toggleIsAbout,
        toggleIsProjects,
        toggleIsContact,
    ]);

    return (
        <NewTextContext.Provider value={context}>
            {children}
        </NewTextContext.Provider>

    );
}

export default UseNewTextProvider;