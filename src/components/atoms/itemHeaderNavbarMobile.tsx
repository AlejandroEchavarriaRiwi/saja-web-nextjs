"use client";
import { ReactElement, useState } from "react";

interface IItemHeaderNavProps {
  name: string;
  icon?: ReactElement;
  content?: React.ReactNode;
  isMobil: boolean;
}
export default function ItemHeaderNavMobile({
  name,
  icon,
}: IItemHeaderNavProps): React.ReactNode {
  const [isActiveTab, setActiveTab] = useState<boolean>(false);

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
