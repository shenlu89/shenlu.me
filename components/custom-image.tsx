import Image from "next/image";

export default function CustomImg({ src, alt, ...props }: any) {
  return (
    <Image
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
