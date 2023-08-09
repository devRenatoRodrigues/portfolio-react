import { useState } from 'react'

function useNewText() {
  const [isAbout, setIsAbout] = useState(false);
  const [isProjects, setIsProjects] = useState(false);
  const [isContact, setIsContact] = useState(false);

  const toggleIsAbout = () => {
    setIsAbout(!isAbout);
  };
  const toggleIsProjects = () => {
    setIsProjects(!isProjects);
  };
  const toggleIsContact = () => {
    setIsContact(!isContact);
  };
  return {
    isAbout,
    isProjects,
    isContact,
    toggleIsAbout,
    toggleIsProjects,
    toggleIsContact,
  }
}


export default useNewText
