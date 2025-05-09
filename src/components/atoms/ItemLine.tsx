interface IItemLineProps {
  text: string;
}
export default function ItemLine({ text }: IItemLineProps): React.ReactNode {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[var(--color-white)] text-[.9rem] p-3">{text}</p>
      <div className="w-full h-[.5px] bg-[var(--color-gray)]"></div>
    </div>
  );
}
