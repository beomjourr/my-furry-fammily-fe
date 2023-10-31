import type { Meta, StoryObj } from '@storybook/react';

import { useDisclosure } from '@chakra-ui/react';
import { ConfirmModal } from './ConfirmModal';

const ModalSample = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const getSampleBodyContentEle = () => {
    return <div>Modal Content</div>;
  };

  return (
    <>
      <button type="button" onClick={onOpen}>
        모달 띄우기
      </button>
      <ConfirmModal
        isOpen={isOpen}
        onClose={onClose}
        isCenterPosition={false}
        modalHeaderContent="헤더영역"
        modalBodyContent={getSampleBodyContentEle()}
      />
    </>
  );
};

const meta = {
  title: 'next/client-component/ConfirmModal',
  component: ModalSample,
} satisfies Meta<typeof ConfirmModal>;

export default meta;
type Story = StoryObj<typeof ConfirmModal>;

export const Default: Story = {
  name: 'ConfirmModal',
  args: {
    isOpen: false,
    modalHeaderContent: 'header',
    modalBodyContent: null,
    isCenterPosition: true,
    isCloseOnOverlayClick: false,
  },
};
