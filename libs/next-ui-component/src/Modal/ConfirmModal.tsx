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
} from '@chakra-ui/react';

export interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  modalHeaderContent?: string;
  modalBodyContent: React.ReactNode;
  isCenterPosition?: boolean;
  isCloseOnOverlayClick?: boolean;
  confirmMessage?: string;
  cancelMessage?: string;
  onClickConfirm?: () => void;
  onClickCancel?: () => void;
}

export function ConfirmModal({
  isOpen,
  onClose,
  modalHeaderContent,
  modalBodyContent,
  isCenterPosition = true,
  isCloseOnOverlayClick = false,
  confirmMessage = '확인',
  cancelMessage = '취소',
  onClickConfirm,
  onClickCancel,
}: ConfirmModalProps) {
  const modalContentProps = isCenterPosition
    ? { borderRadius: '16px', width: '80%' }
    : { bottom: 0, borderRadius: '16px 16px 0 0' };

  return (
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
        <ModalBody
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          padding="36px 16px"
          textAlign="center"
        >
          {modalBodyContent}
        </ModalBody>
        <ModalFooter
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexDirection="column"
          padding="16px"
          gap="10px"
        >
          <Button
            onClick={onClickConfirm || onClose}
            w="100%"
            h="48px"
            display="flex"
            justify-content="center"
            align-items="center"
            align-self="stretch"
            padding="0px 16px"
            overflow="hidden"
            colorScheme="brand"
            backgroundColor="brand.300"
            borderRadius="10px"
          >
            {confirmMessage}
          </Button>
          <Button
            onClick={onClickCancel || onClose}
            w="100%"
            h="48px"
            display="flex"
            justify-content="center"
            align-items="center"
            align-self="stretch"
            padding="0px 16px"
            overflow="hidden"
            backgroundColor="#f5f5f7"
            color="#9A9AA1"
            borderRadius="10px"
          >
            {cancelMessage}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ConfirmModal;
