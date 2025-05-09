interface ICardV2Props {
  title: string;
  url_image: string;
  alt_image: string;
}
export default function CardV2({
  title,
  url_image,
  alt_image,
}: ICardV2Props): React.ReactNode {
  return (
    <div className="bg-white rounded-[var(--border-radius-small)] flex flex-col gap-6 p-6">
      <h3 className="font-medium text-[1rem]">{title}</h3>
      <div>
        <img
          src={url_image}
          alt={alt_image}
          className="rounded-[var(--border-radius-small)]"
        />
      </div>
    </div>
  );
}
