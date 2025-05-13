"use client";

import { IServiceElement } from "@/interfaces/serviceElement";
import { useRouter } from "next/navigation";

interface IServiceElementProps {
  title: string;
  data: IServiceElement[];
}
export default function ServiceElement({
  title,
  data,
}: IServiceElementProps): React.ReactNode {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <h3 className="text-[var(--color-text)]">{title}</h3>
      <ul className="flex flex-col gap-2">
        {data.map((item, index) => (
          <div
            key={index}
            onClick={() => router.push(item.path || "")}
            className="flex gap-4 hover:bg-[var(--color-gray)] p-2 rounded-[var(--border-radius-small)] cursor-pointer transition-colors duration-200"
          >
            <span className="text-[var(--color-blue)] mt-1">{item.icon}</span>
            <div>
              <h6 className="font-bold text-[1rem]">{item.title}</h6>
              <p className="text-[var(--color-text)] text-[.8rem]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
