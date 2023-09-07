'use client';

import React, { ChangeEvent, useRef, useState } from 'react';
import Image from 'next/image';
import ProfileButton from '@my-furry-family/images/profile_button.svg';
import classNames from 'classnames';
import styles from './ImageProfile.module.scss';

export interface ImageProfileProps {
  onUpload?: (image: File) => void;
}

export function ImageProfile(props: ImageProfileProps) {
  const { onUpload } = props;
  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);
  const ref = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent) => {
    const file = (e.target as HTMLInputElement)?.files?.[0];

    if (!file) {
      return;
    }

    setImageSrc(URL.createObjectURL(file));
    onUpload?.(file);
  };

  return (
    <div
      className={styles.container}
      onClick={() => {
        ref.current?.click();
      }}
    >
      {imageSrc ? (
        <Image
          fill={true}
          className={classNames(styles.profile, styles.uploaded)}
          src={imageSrc}
          alt="uploadedImage"
        />
      ) : (
        <Image
          className={styles.profile}
          src={ProfileButton}
          alt="profileButton"
        />
      )}
      <input
        ref={ref}
        type="file"
        accept="image/jpeg;image/png"
        hidden
        onChange={handleChange}
      />
    </div>
  );
}

export default ImageProfile;
