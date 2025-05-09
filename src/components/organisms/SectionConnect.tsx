import { DATA_SECTION_CONNECT } from "@/utils/constanst/dataSectionCard";
import Card from "../molecules/Card";

export default function SectionConnect(): React.ReactNode {
  return (
    <section className="p-4 pt-20 pb-20 bg-[var(--color-black-02)] text-[var(--color-white)] flex flex-col gap-10 md:pl-[var(--padding-big)] md:pr-[var(--padding-big)]">
      <h2 className="font-medium text-[1.8rem] md:text-[4rem]">
        Connect With Us
      </h2>
      <div className="flex flex-col gap-6 md:flex-row ">
        {DATA_SECTION_CONNECT.map((card, index) => (
          <Card
            alt_url={card.alt_url}
            description={card.description || ""}
            img_url={card.url_image}
            textButton={card.textButton || ""}
            title={card.title}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}
