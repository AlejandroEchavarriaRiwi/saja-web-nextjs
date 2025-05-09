import ItemTabInformation from "../molecules/ItemTabInformation";

export default function SectionExploreOur(): React.ReactNode {
  return (
    <section className="p-4 pt-20 bg-[var(--color-gray)] flex flex-col gap-6 pb-20 items-center">
      <h2 className="font-medium text-[1.7rem] md:text-[2rem] text-center">
        Explore Our Innovative Solutions
      </h2>
      <p className="text-center">
        Join us in Medellin, Colombia, where we bring your software dreams to
        life and keep your devices running smoothly.
      </p>
      <div className="flex flex-col gap-6 md:w-[65%]">
        <ItemTabInformation
          text="Need help with software development?"
          textActive="Our friendly team crafts personalized software solutions to fit your unique business needs. Whether it's a new app or system updates, we're here to help."
        />
        <ItemTabInformation
          text="Why trust us with your tech?"
          textActive="We focus on quality and customer satisfaction, delivering reliable services tailored to your needs."
        />
        <ItemTabInformation
          text="How do we ensure your happiness?"
          textActive="We believe in open communication and transparency, working with you to achieve results that exceed your expectations."
        />
      </div>
    </section>
  );
}
