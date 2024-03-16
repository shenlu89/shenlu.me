import ImageWithFallback from "./image-with-fallback";

export default function CustomImg({ src, alt, ...props }: any) {
  return (
    <ImageWithFallback
      {...props}
      alt={alt}
      src={src}
      width={0}
      height={0}
      sizes="100vw"
      style={{
        width: "100%",
        height: "auto",
      }}
      priority={true}
    />
  );
}
