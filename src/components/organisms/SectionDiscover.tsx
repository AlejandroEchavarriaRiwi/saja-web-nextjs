import { DATA_SECTION_CARD } from "@/utils/constanst/dataSectionCard";
import CardV2 from "../molecules/CardV2";

export default function SectionDiscover(): React.ReactNode {
  return (
    <section className="p-4 pt-10 bg-[var(--color-gray)] flex flex-col gap-10 pb-10 md:pl-[var(--padding-big)] md:pr-[var(--padding-big)]">
      <div className="flex flex-col gap-2">
        <h2 className="text-[1.6rem] font-medium">
          Discover our cutting-edge offeringscrafted just for you
        </h2>
        <p>
          Our team in Medellin, Colombia, excels in software development and
          device repair, providing tailored solutions to elevate your tech
          journey.
        </p>
      </div>
      <div className="grid md:grid-cols-4 gap-4">
        {DATA_SECTION_CARD.map((card, index) => (
          <CardV2
            key={index}
            alt_image={card.alt_url}
            title={card.title}
            url_image={card.url_image}
          />
        ))}
      </div>
    </section>
  );
}
