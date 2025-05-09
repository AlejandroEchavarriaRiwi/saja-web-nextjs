import { DATA_NAV_FOOTER_SERVICES } from "@/utils/constanst/dataNavHeader";
import Button from "../atoms/Button";
import NavFooter from "../molecules/NavFooter";
import Image from "next/image";
import ContentIcon from "../atoms/ContentIcon";
import {
  IconFacebook,
  IconInstagram,
  IconLinkedin,
  IconTwitter,
  IconYoutube,
} from "../../../public/icons";
import Link from "next/link";

export default function Footer(): React.ReactNode {
  return (
    <footer className="p-4 bg-[var(--color-black-02)] md:pl-[var(--padding-big)] md:pr-[var(--padding-big)] pb-20">
      <div className="flex flex-col md:flex-row gap-[50px] md:gap-[500px]">
        <div className="flex flex-col gap-6">
          <p className="text-[var(--color-text-02]">
            Discover our innovative tech solutions.
          </p>
          <div>
            <Button variant="default">Join Us</Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-20">
          <NavFooter title="Our Services" data={DATA_NAV_FOOTER_SERVICES} />
          <NavFooter title="Our Resources" data={DATA_NAV_FOOTER_SERVICES} />
          <NavFooter title="About Us" data={DATA_NAV_FOOTER_SERVICES} />
          <NavFooter title="Stay Connected" data={DATA_NAV_FOOTER_SERVICES} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between pt-20 gap-8">
        <Image alt="" src="/imagotipo.svg" height={75} width={75} />
        <div className="flex items-center gap-4">
          <ContentIcon icon={<IconFacebook className="text-white h-6 w-6" />} />
          <ContentIcon
            icon={<IconInstagram className="text-white h-6 w-6" />}
          />
          <ContentIcon icon={<IconTwitter className="text-white h-6 w-6" />} />
          <ContentIcon icon={<IconLinkedin className="text-white h-6 w-6" />} />
          <ContentIcon icon={<IconYoutube className="text-white h-6 w-6" />} />
        </div>
        <div className="flex items-center gap-4 text-[var(--color-white)] text-[.9rem]">
          <Link href={""}>Privacy</Link>
          <Link href={""}>Terms</Link>
          <Link href={""}>Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}
