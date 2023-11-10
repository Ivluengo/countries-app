import { useState } from 'react';

function useToggle(initialToggle = true) {
    const [toggle, setToggle] = useState(initialToggle);

    function changeToggle () {
        setToggle(!toggle);
    }

    return [toggle, changeToggle];
  
}

export default useToggle