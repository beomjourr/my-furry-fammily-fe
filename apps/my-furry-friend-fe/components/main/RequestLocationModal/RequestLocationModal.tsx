import React from 'react';
import { ConfirmModal } from '@my-furry-family/next-ui-component';

interface RequestLocationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onClickCancel: () => void;
  onClickConfirm: () => void;
}

function RequestLocationModal({
  isOpen,
  onClose,
  onClickCancel,
  onClickConfirm,
}: RequestLocationModalProps) {
  return (
    <ConfirmModal
      isOpen={isOpen}
      modalBodyContent={
        <>
          <p>내 위치를 설정해주세요</p>
          <p>내 위치를 기반으로 병원을 찾아줘요!</p>
        </>
      }
      onClose={onClose}
      isCloseOnOverlayClick
      isCenterPosition={false}
      confirmMessage="직접 주소 입력하기"
      cancelMessage="취소"
      onClickConfirm={onClickConfirm}
      onClickCancel={onClickCancel}
    />
  );
}

export default RequestLocationModal;
