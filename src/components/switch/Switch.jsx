import React from "react";
import {Switch} from "@nextui-org/react";
import { MoonIcon } from "../icons/MoonIcon";
import { SunIcon } from "../icons/SunIcon";

export default function App() {
  return (
    <Switch
      defaultSelected
      size="lg"
      color="success"
      startContent={<SunIcon/>}
      endContent={<MoonIcon/>}
      className="absolute top-0 left-0"
    >
      Dark mode
    </Switch>
  );
}

