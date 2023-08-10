import { useContext } from 'react';
import { NewTextContext } from './useNewTextProvider';

const useCountDownTimerContext = () => useContext(NewTextContext);

export default useCountDownTimerContext;