import {
  Box,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Zoom } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/zoom';
import styles from './Swiper.module.scss';

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
      <ModalContent background="rgba(0,0,0,0.7)">
        <ModalCloseButton size="lg" className="text-white" />
        <ModalBody className="flex items-center justify-center py-[42px]">
          <Swiper
            loop
            pagination
            zoom
            modules={[Pagination, Zoom]}
            initialSlide={previewImage.index}
            style={{ height: '80vh' }}
            className={styles.swiper}
          >
            {previewImage.image.map((imageItem, index) => (
              <SwiperSlide key={index}>
                <Flex
                  className="swiper-zoom-container"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Image
                    className="w-full h-auto"
                    src={imageItem}
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="preview image"
                  />
                </Flex>
              </SwiperSlide>
            ))}
          </Swiper>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
