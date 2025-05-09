import Button from "../atoms/Button";

interface ICardProps {
  img_url: string;
  title: string;
  description: string;
  textButton: string;
  alt_url: string;
}
export default function Card({
  img_url,
  title,
  description,
  textButton,
  alt_url,
}: ICardProps): React.ReactNode {
  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-[var(--border-radius-small)] h-[300px] w-full">
        <img
          src={img_url}
          alt={alt_url}
          className="rounded-[var(--border-radius-small)] h-full object-cover w-full"
        />
      </div>
      <h2 className="text-[1.2rem] font-medium">{title}</h2>
      <p className="text-[var(--color-text-02)]">{description}</p>
      <div>
        <Button variant="default">{textButton}</Button>
      </div>
    </div>
  );
}
