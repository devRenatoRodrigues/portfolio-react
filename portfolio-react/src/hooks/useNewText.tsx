import { useState } from 'react'

function useNewText() {
  const [isAbout, setIsAbout] = useState(false);
  const [isWork, setIsWork] = useState(false);
  const [isContact, setIsContact] = useState(false);
  const [isBack, setIsBack] = useState(false);

  const toggleIsAbout = () => {
    setIsAbout(!isAbout);
  };
  const toggleIsWork = () => {
    setIsWork(!isWork);
  };
  const toggleIsContact = () => {
    setIsContact(!isContact);
  };
  const toggleIsBack = () => {
    setIsBack(!isBack);
  };
  return {
    isAbout,
    isWork,
    isContact,
    toggleIsAbout,
    toggleIsWork,
    toggleIsContact,
    toggleIsBack,
    isBack,
  }
}


export default useNewText
