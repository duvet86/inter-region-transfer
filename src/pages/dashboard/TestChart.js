import React, { useRef, useCallback } from "react";

export default function TestChart() {
  const divRef = useRef(null);

  const getRef = useCallback((el) => {
    divRef.current = el;
  }, []);

  return <div ref={getRef}></div>;
}
