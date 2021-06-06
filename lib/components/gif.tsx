/* eslint @typescript-eslint/no-var-requires: off, import/no-dynamic-require: off, global-require: off, unicorn/prefer-module: off */
import c from "clsx";
import React from "react";

interface GifProps {
  src: string;
  title: string;
}

const Gif = ({src, title}: GifProps) => {
  return (
    <figure className={c("flex flex-col")}>
      <video className="shadow-lg" playsInline muted autoPlay loop>
        <source
          src={require(`../../assets/gif/${src}.hevc.mp4`)}
          type="video/mp4; codecs=hevc,mp4a.40.2"
        />
        <source
          src={require(`../../assets/gif/${src}.av1.mp4`)}
          type="video/mp4; codecs=av01.0.05M.08,opus"
        />
        <source
          src={require(`../../assets/gif/${src}.h264.mp4`)}
          type="video/mp4; codecs=avc1.4D401E,mp4a.40.2"
        />
      </video>

      <figcaption className="text-sm font-light text-right">{title}</figcaption>
    </figure>
  );
};

export default Gif;
