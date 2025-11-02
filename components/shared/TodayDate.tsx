import React from "react";

const date = new Date();
const iranDate = date.toLocaleDateString("fa-IR-u-ca-persian", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

function TodayDate() {
  return <div className="text-lg">{iranDate}</div>;
}

export default TodayDate;
