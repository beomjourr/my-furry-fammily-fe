import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

interface PreviewImageProps {
  isOpen: boolean;
  onClose: () => void;
  previewImage: {
    image: string[];
    index: number;
  };
}

export default function PreviewImage({
  isOpen,
  onClose,
  previewImage,
}: PreviewImageProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full" closeOnOverlayClick>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton size="lg" className="text-white" />
        <ModalBody className="flex items-center justify-center py-[42px] bg-black">
          <Swiper
            loop
            pagination
            modules={[Pagination]}
            initialSlide={previewImage.index}
          >
            {previewImage.image.map((imageItem, index) => (
              <SwiperSlide key={index}>
                <Image
                  className="w-full h-auto"
                  src={imageItem}
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="preview image"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
