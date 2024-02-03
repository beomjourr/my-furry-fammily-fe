import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import fileBlank from '@my-furry-family/images/blank.svg';

interface ImagesProps {
  images: {
    has_sheet_image: boolean;
    main_images: {
      uploaded_url: string;
      image_type: string;
      is_thumbnail: boolean;
    }[];
    sheet_images: {
      uploaded_url: string;
      image_type: string;
      is_thumbnail: boolean;
    }[];
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
            .map((imageItem, index) => {
              return (
                <SwiperSlide key={index}>
                  <div
                    style={{
                      background: '#E3E3E8',
                      width: 'calc(100% + 32px)',
                      height: '240px',
                    }}
                  >
                    <Image fill src={imageItem.uploaded_url} alt="main image" />
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      ) : (
        <Image
          src={fileBlank}
          style={{ width: '100%', height: '240px', background: '#F9F9F9' }}
          alt="file_blank"
        />
      )}
    </>
  );
}
