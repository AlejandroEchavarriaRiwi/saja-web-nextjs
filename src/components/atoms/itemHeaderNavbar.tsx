"use client";
import { ReactElement, useState } from "react";

interface IItemHeaderNavProps {
  name: string;
  icon?: ReactElement;
  content?: React.ReactNode;
}
export default function ItemHeaderNav({
  name,
  icon,
  content,
}: IItemHeaderNavProps): React.ReactNode {
  const [isActiveTab, setActiveTab] = useState<boolean>(false);

  return (
    <li
      onClick={() => {
        if (icon) {
          setActiveTab(!isActiveTab);
        }
      }}
      className={`relative flex items-center gap-2 cursor-pointer hover:bg-[var(--color-black-hover)] p-2 pl-4 pr-4 rounded-[var(--border-radius-small)] transition-colors duration-200`}
    >
      {name}
      {icon && <span>{icon}</span>}
      {isActiveTab && content}
    </li>
  );
}
