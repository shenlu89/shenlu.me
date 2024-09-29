import Image from "next/image";

export default function CustomImg({ src, alt, width, height, ...props }: any) {
  return (
    <Image
      {...props}
      alt={alt}
      src={src}
      width={width || 0}
      height={height || 0}
      sizes="100vw"
      style={{
        width: "100%",
        height: "auto",
      }}
      priority={true}
    />
  );
}
