import React from 'react';
import { ConfirmModal } from '@my-furry-family/next-ui-component';

interface RequestLocationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onClickConfirm: () => void;
}

function RequestLocationModal({
  isOpen,
  onClose,
  onClickConfirm,
}: RequestLocationModalProps) {
  return (
    <ConfirmModal
      isOpen={isOpen}
      modalBodyContent={
        <>
          <p>내 위치를 설정해주세요</p>
          <p>
            <span>반경 5km 내에 있는 병원</span>들이 표시돼요!
          </p>
        </>
      }
      onClose={onClose}
      isCenterPosition={false}
      confirmMessage="동의하기"
      cancelMessage="다음에 할게요"
      onClickConfirm={onClickConfirm}
    />
  );
}

export default RequestLocationModal;
