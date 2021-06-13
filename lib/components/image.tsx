/* eslint @typescript-eslint/no-var-requires: off, import/no-dynamic-require: off, global-require: off, unicorn/prefer-module: off */
import c from "clsx";
import React from "react";

interface ImageProps {
  src: string;
  title?: string;
  alt?: string;
  className?: string;
}

const Image = ({src, alt, title, className}: ImageProps) => {
  if (/.svg$/.test(src)) {
    return <img className="w-full" src={src} alt={alt} title={title} />;
  }
  const image = require(`../../assets/images/${src}?resize&sizes[]=575&sizes[]=991&sizes[]=1115&sizes[]=1400`);

  return (
    <figure className={c("flex flex-col", className)}>
      <picture>
        <source srcSet={image.srcSet} type="image/webp" />

        <img
          className="w-full"
          src={image.src}
          srcSet={image.srcSet}
          alt={alt}
          title={title}
          width={image.width}
          height={image.height}
          sizes="(max-width: 575px) 575w, (max-width: 991px) 991w, (max-width: 1339px) 1115w, 83vw"
          loading="lazy"
        />
      </picture>
      <figcaption className="text-sm font-light text-right">{title}</figcaption>
    </figure>
  );
};

export default Image;
