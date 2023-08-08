import { createContext, useMemo } from 'react';
import useNewText from '../useNewText';

export const NewTextContext = createContext();

function UseNewTextProvider({ children }) {
    const {
        isButton,
        toggleIsButton
    } = useNewText();

    const context = useMemo(() => ({
        isButton,
        toggleIsButton
    }), [
        isButton,
        toggleIsButton
    ]);

    return (
        <NewTextContext.Provider value={context}>
            {children}
        </NewTextContext.Provider>

    );
}

export default UseNewTextProvider;