import Button from "../atoms/Button";
import ItemLine from "../atoms/ItemLine";

export default function SectionYourTrusted(): React.ReactNode {
  return (
    <section className="p-4 bg-[var(--color-black)] flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <h2 className="text-[var(--color-white)] pt-16 text-[1.4rem] font-medium">
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
