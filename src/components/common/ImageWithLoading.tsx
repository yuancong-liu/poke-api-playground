import { Ref, useState } from "react";
import classNames from "classnames";
import Image from "next/image";
import styles from "./index.module.scss";

type Props = {
  src: string;
  alt?: string;
  ref?: Ref<HTMLImageElement>;
  loadedCompleteHandler?: () => void;
};

export const ImageWithLoading = ({
  src,
  alt = "",
  ref,
  loadedCompleteHandler,
}: Props) => {
  const [loading, setLoading] = useState(true);

  const handleLoadedComplete = () => {
    loadedCompleteHandler?.();
    setLoading(false);
  };

  return (
    <div
      className={classNames(styles["image-wrapper"], {
        [styles["loading"]]: loading,
      })}
    >
      <Image
        ref={ref}
        src={src}
        alt={alt}
        fill
        style={{ objectFit: "cover" }}
        loading="lazy"
        onLoadingComplete={handleLoadedComplete}
      />
    </div>
  );
};
