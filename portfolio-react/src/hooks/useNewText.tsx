import { useState } from 'react'

function useNewText() {
  const [isButton, setIsButton] = useState(false);

  const toggleIsButton = () => {
    setIsButton(!isButton);
  };
  return {
    isButton,
    toggleIsButton
  }
}


export default useNewText
