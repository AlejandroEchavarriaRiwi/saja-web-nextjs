import { ButtonHTMLAttributes } from "react";

type IVariant = "default" | "gray";
interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: IVariant;
  children: React.ReactNode;
}
export default function Button({
  variant,
  children,
  ...props
}: IButtonProps): React.ReactNode {
  const classVariant = {
    default: "bg-[var(--color-blue)] text-white",
    gray: "bg-[var(--color-gray)]",
  };
  return (
    <button
      {...props}
      className={`${classVariant[variant]} p-3 pl-6 pr-6 rounded-[var(--border-radius-small)]`}
    >
      {children}
    </button>
  );
}
