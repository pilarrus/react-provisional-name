import React from "react";

type PropsDate = {
  timestamp: number;
};

const FormatDate: React.FC<PropsDate> = ({timestamp}) => {
  let date = new Date(timestamp * 1000);
  let dia = date.getDate();
  let mes = date.getMonth()+1;
  let año = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();

  return (
    <p>{dia + "/" + mes + "/" + año + " " + hour + ":" + minutes}</p>
  );
}

export default FormatDate;