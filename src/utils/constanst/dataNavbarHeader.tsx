import { INavbarHeader } from "@/interfaces/navbarHeader";
import { IconArrowDown } from "../../../public/icons";
import ContentServiceTab from "@/components/molecules/ContentServiceTab";
import ContentSupportTab from "@/components/molecules/ContentSupportTab";

export const DATA_NAVBAR_HEADER: INavbarHeader[] = [
  {
    name: "Services",
    icon: <IconArrowDown />,
    content: <ContentServiceTab />,
  },
  {
    name: "Story",
  },
  {
    name: "Blog",
  },
  {
    name: "Support",
    icon: <IconArrowDown />,
    content: <ContentSupportTab />,
  },
];
