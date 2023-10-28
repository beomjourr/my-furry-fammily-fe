'use client';

import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Button,
  ModalHeader,
  Portal,
} from '@chakra-ui/react';

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  modalHeaderContent?: string;
  modalBodyContent: React.ReactNode;
  isCenterPosition?: boolean;
  isCloseOnOverlayClick?: boolean;
  confirmMessage?: string;
  cancleMessage?: string;
  onClickConfirm?: () => void;
  onClickCancle?: () => void;
}

function ConfirmModal({
  isOpen,
  onClose,
  modalHeaderContent,
  modalBodyContent,
  isCenterPosition = true,
  isCloseOnOverlayClick = false,
  confirmMessage = '확인',
  cancleMessage = '취소',
  onClickConfirm,
  onClickCancle,
}: ConfirmModalProps) {
  const modalContentProps = isCenterPosition
    ? { borderRadius: '20px', width: '80%' }
    : { bottom: 0, borderRadius: '20px 20px 0 0' };

  return (
    <Portal>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
        isCentered
        closeOnOverlayClick={isCloseOnOverlayClick}
      >
        <ModalOverlay />
        <ModalContent {...modalContentProps} position="absolute">
          {modalHeaderContent && (
            <ModalHeader textAlign="center">{modalHeaderContent}</ModalHeader>
          )}
          <ModalBody padding={8} textAlign="center" paddingBlock={5}>
            {modalBodyContent}
          </ModalBody>
          <ModalFooter
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexDirection="column"
            h={120}
          >
            <Button
              onClick={onClickConfirm || onClose}
              w="100%"
              maxH={40}
              overflow="hidden"
              colorScheme="brand"
              backgroundColor="brand.300"
            >
              {confirmMessage}
            </Button>
            <Button
              onClick={onClickCancle || onClose}
              w="100%"
              maxH={40}
              overflow="hidden"
            >
              {cancleMessage}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Portal>
  );
}

export default ConfirmModal;
