import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import fileBlank from '@my-furry-family/images/blank.svg';
import { useState } from 'react';
import PreviewImage from './PreviewImage';

interface ImagesProps {
  images: {
    has_sheet_image: boolean;
    main_images: string[];
    sheet_images: string[];
    thumbnail_image?: string;
  };
}

export default function Images({ images }: ImagesProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState<{
    image: string[];
    index: number;
  }>({
    image: [],
    index: 0,
  });

  const handlePreviewImage = (index: number) => {
    setPreviewImage({
      image: [...images.main_images].slice(0, 5),
      index,
    });
    setIsPreviewOpen(true);
  };

  return (
    <>
      {images.main_images.length > 0 || images.sheet_images.length > 0 ? (
        <Swiper loop className="mySwiper" pagination modules={[Pagination]}>
          {[...images.main_images].slice(0, 5).map((imageItem, index) => (
            <SwiperSlide key={index}>
              <button
                type="button"
                style={{
                  background: '#E3E3E8',
                  width: 'calc(100% + 32px)',
                  height: '240px',
                  position: 'relative',
                }}
                onClick={() => {
                  handlePreviewImage(index);
                }}
              >
                <Image fill src={imageItem} alt="main image" priority />
              </button>
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
      <PreviewImage
        previewImage={previewImage}
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
      />
    </>
  );
}
