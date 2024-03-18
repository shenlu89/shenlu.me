"use client";
import Image from "next/image";
import { useState } from "react";

export default function ImageWithFallback({ src, alt, ...props }: any) {
  const [srcUrl, setSrcUrl] = useState(src);

  return (
    <Image
      {...props}
      alt={alt}
      src={srcUrl}
      placeholder="blur"
      blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkiAMAAGQAYG61VcsAAAAASUVORK5CYII="
      onError={() => setSrcUrl("/image-placeholder.svg")}
      priority={true}
    />
  );
}
