import Card from "../molecules/Card";

export default function SectionCard(): React.ReactNode {
  return (
    <section className="p-4 flex flex-col md:flex-row gap-10 md:pl-[var(--padding-big)] md:pr-[var(--padding-big)]">
      <Card
        alt_url="image discover our tailored"
        description="Join us in Medellin, where our expert team crafts custom software solutions to elevate your business. From bespoke applications to mobile innovations, we're here to help."
        img_url="/images/image04.avif"
        textButton="Explore"
        title="Discover our tailored software services"
      />
      <Card
        alt_url="image discover our tailored"
        description="Our friendly experts in Medellin are ready to keep your devices running smoothly. Whether it's a phone or computer, we've got your back."
        img_url="/images/image02.avif"
        textButton="Explore"
        title="Upgrade your tech effortlessly"
      />
    </section>
  );
}
