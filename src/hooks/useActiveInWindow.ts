import { useEffect, useState } from "react";

const useActiveInWindow = () => {
  const [show, setShow] = useState(false);
  const onEnter = () => {
    setShow(true);
  };
  useEffect(() => {
    window.addEventListener("mousemove", onEnter);
    window.addEventListener("touchstart", onEnter);
    return () => {
      window.removeEventListener("mousemove", onEnter);
      window.removeEventListener("touchstart", onEnter);
    };
  }, []);
  return show;
};

export default useActiveInWindow;
