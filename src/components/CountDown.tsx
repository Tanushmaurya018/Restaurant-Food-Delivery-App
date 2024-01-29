"use client"

import React from "react";
import Countdown from "react-countdown";

const CountDown = () => {
  const endingDate = new Date("2024-01-30");

  return <Countdown  className="text-4xl font-extrabold" date={endingDate} />;
};

export default CountDown;
