import React from "react";
import Select from "./Select";

export default {
  title: "Select",
  component: Select,
};


export const Small = () => <Select size = 'small' placeholder='Small size' />;
export const Medium = () => <Select size = 'medium' placeholder='Medium size' />;
export const Large = () => <Select size = 'large' placeholder='Large size' />;
