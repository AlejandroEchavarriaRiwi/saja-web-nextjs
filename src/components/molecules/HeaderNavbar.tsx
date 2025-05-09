import { INavbarHeader } from "@/interfaces/navbarHeader";
import { DATA_NAVBAR_HEADER } from "@/utils/constanst/dataNavbarHeader";
import ItemHeaderNav from "../atoms/itemHeaderNavbar";

export default function HeaderNavbar(): React.ReactNode {
  return (
    <nav className="hidden md:flex">
      <ul className="flex flex-col md:flex-row items-center gap-2">
        {DATA_NAVBAR_HEADER.map((item: INavbarHeader, index: number) => (
          <ItemHeaderNav
            name={item.name}
            content={item.content}
            icon={item.icon}
            key={index}
          />
        ))}
      </ul>
    </nav>
  );
}
