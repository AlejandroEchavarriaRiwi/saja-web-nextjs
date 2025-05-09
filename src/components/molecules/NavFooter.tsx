import Link from "next/link";

interface INavFooterProps {
  title: string;
  data: { name: string }[];
}
export default function NavFooter({
  title,
  data,
}: INavFooterProps): React.ReactNode {
  return (
    <nav>
      <p>{title}</p>
      <ul className="flex flex-col gap-2">
        {data.map((item, index) => (
          <Link href={""} className="text-[var(--color-white)]" key={index}>
            {item.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
