"use client";
import { ReactElement } from "react";

interface IItemHeaderNavProps {
  name: string;
  icon?: ReactElement;
  content?: React.ReactNode;
  isMobil: boolean;
  setActiveTab: (value: boolean) => void;
  isActiveTab: boolean;
}
export default function ItemHeaderNavMobile({
  name,
  icon,
  setActiveTab,
  isActiveTab,
}: IItemHeaderNavProps): React.ReactNode {
  return (
    <li
      onClick={() => {
        if (icon) {
          setActiveTab(!isActiveTab);
        }
      }}
      className="flex items-center gap-2 p-2"
    >
      {name}
      {icon && <span>{icon}</span>}
    </li>
  );
}
