import Button from "../atoms/Button";
import ItemLine from "../atoms/ItemLine";

export default function SectionYourTrusted(): React.ReactNode {
  return (
    <section className="p-4 bg-[var(--color-black-02)] flex flex-col md:flex-row md:justify-between md:items-center gap-4 pt-20 pb-20 md:pl-[var(--padding-big)] md:pr-[var(--padding-big)]">
      <div className="flex flex-col items gap-3">
        <h2 className="text-[var(--color-white)] text-[1.4rem] font-medium">
          Your trusted tech ally in Medellin
        </h2>
        <p className="text-[var(--color-text-02)]">
          Explore our tailored software and repair solutions.
        </p>
        <div>
          <Button variant="default">Get in touch</Button>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <ItemLine text="Custom software solutions for your unique needs." />
        <ItemLine text="Dependable repair services for all your devices." />
        <ItemLine text="Become part of our thriving tech community." />
      </div>
    </section>
  );
}
