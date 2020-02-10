import React from "react";

type DateProps = {
  timestamp: number;
};

const FormatDate: React.FC<DateProps> = ({ timestamp }) => {
  let date = new Date(timestamp * 1000);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let min = minutes < 10 ? `0${minutes}` : minutes;

  return (
    <p className="formatDate">
      <span className="formatDate__date">{day + "/" + month + "/" + year}</span>
      <span className="formatDate__hour">{hour + ":" + min}</span>
    </p>
  );
};

export default FormatDate;
