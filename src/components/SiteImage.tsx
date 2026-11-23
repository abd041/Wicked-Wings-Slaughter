import Image, { type ImageProps } from "next/image";

type Props = Omit<ImageProps, "alt"> & {
  alt: string;
};

/** Local optimized photos via next/image. */
export function SiteImage({ alt, className = "", sizes = "100vw", ...props }: Props) {
  return <Image alt={alt} className={className} sizes={sizes} {...props} />;
}
