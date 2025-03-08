import { redirect } from "next/navigation";
import React from "react";

const CarName = ({ params }) => {
  const { car_name } = params;
  if (!car_name) redirect("/cars");
  return <div>{car_name}</div>;
};

export default CarName;
