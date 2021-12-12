import React, { useEffect } from "react";

const Alert = ({ type, msg, editAlert, list }) => {
  useEffect(() => {
    let timeout = setTimeout(() => {
      editAlert(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [list]);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
