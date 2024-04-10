import { Image } from "@nextui-org/react";

type Props = {
  image: string | undefined;
  description: string;
  title: string;
};

export default function Card({ image, description, title }: Props) {
  return (
    <div className="w-3/4 flex">
      <Image alt={`Imagem de capa do artigo ${title}`} width={400}  src={image} fallbackSrc="https://via.placeholder.com/300x200" />
      <div>
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
