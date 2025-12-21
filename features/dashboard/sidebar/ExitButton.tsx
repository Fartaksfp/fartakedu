"use client"
import { Button } from "@/components/ui/button";
import { logoutUser } from "@/data-layer/user/logoutUser";
import { DoorOpen } from "lucide-react";
import React from "react";

type iconKey = "door-open";

type ItemType = {
  name: string;
  icon: iconKey;
};

const iconsMap = {
  "door-open": DoorOpen,
};

function ExitButton({ item }: { item: ItemType }) {
  const IconComponent = iconsMap[item.icon];
  return (
      <Button onClick={logoutUser} className="w-full h-12 flex justify-start" variant={"outline"}>
        <IconComponent />
        <span>{item.name}</span>
      </Button>
  );
}

export default ExitButton;
