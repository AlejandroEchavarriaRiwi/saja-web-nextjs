import { ReactElement } from "react";

interface IContentIconProps {
  icon: ReactElement;
}
export default function ContentIcon({
  icon,
}: IContentIconProps): React.ReactNode {
  return (
    <div className="bg-[var(--color-black)] hover:bg-[var(--color-black-hover)] transition-colors duration-200 cursor-pointer rounded-[var(--border-radius-small)] w-[50px] h-[50px] flex justify-center items-center">
      {icon}
    </div>
  );
}
