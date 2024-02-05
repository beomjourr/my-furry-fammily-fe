'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import fileBlank from '@my-furry-family/images/blank.svg';

interface ImagesProps {
  images: {
    has_sheet_image: boolean;
    main_images: string[];
    sheet_images: string[];
    thumbnail_image?: string;
  };
}

export default function Images({ images }: ImagesProps) {
  return (
    <>
      {images.main_images.length > 0 || images.sheet_images.length > 0 ? (
        <Swiper className="mySwiper" pagination modules={[Pagination]}>
          {[...images.main_images, ...images.sheet_images]
            .slice(0, 5)
            .map((imageItem, index) => (
              <SwiperSlide key={index}>
                <div
                  style={{
                    background: '#E3E3E8',
                    width: 'calc(100% + 32px)',
                    height: '240px',
                    position: 'relative',
                  }}
                >
                  <Image fill src={imageItem} alt="main image" priority />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      ) : (
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '240px',
          }}
        >
          <Image
            src={fileBlank}
            style={{ background: '#F9F9F9' }}
            fill
            alt="file_blank"
            priority
          />
        </div>
      )}
    </>
  );
}
